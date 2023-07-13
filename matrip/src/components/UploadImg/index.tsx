import React, { useState, useRef, useEffect } from 'react'

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import * as uis from './uploadImageStyle';

import { bucketName, s3 } from '../../apis/AWS-S3';

import { canvasPreview } from './canvasPreview';
import { useDebounceEffect } from './useDebounceEffect';
import { useIconClickHandler } from '../../hooks/useIconClickHandler';

import { AiFillCloseCircle } from 'react-icons/ai'
import LoadingIncdicator from '../../components/LoadingIncdicator'

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}



interface CropComponentsProps {
  sendimg: (urlFromCrop: string) => void;
  close: (closeToggle: boolean) => void;
}

const UploadImg: React.FC<CropComponentsProps> = ({ sendimg, close }) => {

  const [imgSrc, setImgSrc] = useState('')
  const [loading, setLoading] = useState<boolean>(false)
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null)

  // const blobUrlRef = useRef('')

  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const SCALE = 1;
  const ROTATE = 0;
  const ASPECT = 1 / 1;

  console.log(loading)

  const handleClose = useIconClickHandler(() => {
    close(false);
  })

  /**
   * input에서
   * 최초 파일 파일 불러오기
   * @param e 
   */
  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined)
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (ASPECT) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, ASPECT))
    }
  }

  /**
   * 자른 이미지 다운로드 
   * => s3에 업로드로 변경
   */
  async function onDownloadCropClick() {
    setLoading(true)
    if (!previewCanvasRef.current) {
      throw new Error('Crop canvas does not exist')
    }

    previewCanvasRef.current.toBlob(async (blob) => {
      if (!blob) {
        throw new Error('Failed to create blob')
      }
      const datedata = Math.floor(Math.random() * 1000000);

      const filename = `${datedata}.jpg`;
      const uploadParams = {
        Bucket: bucketName as string,
        Key: filename,
        Body: blob,
        ContentType: 'image/jpeg',
      };
      console.log(uploadParams)
      try {
        await s3.upload(uploadParams).promise();
        const s3Url = `https://${bucketName}.s3.amazonaws.com/${filename}`;
        await sendimg(s3Url);
        setLoading(false)
        close(false)
      } catch (error) {
        console.error('Error uploading to S3:', error);
      }



      // if (blobUrlRef.current) {
      //   URL.revokeObjectURL(blobUrlRef.current)
      //   sendimg(blobUrlRef.current)
      // }
      // blobUrlRef.current = URL.createObjectURL(blob)
      // hiddenAnchorRef.current!.href = blobUrlRef.current
      // hiddenAnchorRef.current!.click()
    })
  }


  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          SCALE,
          ROTATE,
        )
      }
    },
    500,
    [completedCrop, SCALE, ROTATE],
  )

  async function onUploadButtonClick() {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  }

  return (
    <uis.EditImageCtnr>
      <uis.CropControl>
        <uis.ImageInput type="file" accept="image/*" onChange={onSelectFile} ref={imageInputRef} hidden />
        <div onClick={onUploadButtonClick}>
          이미지  업로드 버튼
        </div >
        <AiFillCloseCircle
          size={30}
          onClick={handleClose}
        />
        {/* <div>
          <label htmlFor="scale-input">Scale: </label>
          <input
            id="scale-input"
            type="number"
            step="0.1"
            value={scale}
            disabled={!imgSrc}
            onChange={(e) => setScale(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="rotate-input">Rotate: </label>
          <input
            id="rotate-input"
            type="number"
            value={rotate}
            disabled={!imgSrc}
            onChange={(e) =>
              setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
            }
          />
        </div> */}
        {/* <div>
          <button onClick={handleToggleAspectClick}>
            Toggle aspect {aspect ? 'off' : 'on'}
          </button>
        </div> */}
      </uis.CropControl>
      {loading &&
        <LoadingIncdicator />
      }
      {imgSrc && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={ASPECT}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
            style={{ transform: `scale(${SCALE}) rotate(${ROTATE}deg)`, width: '600px' }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      {completedCrop && (
        <>
          <div style={{ display: 'none' }}>
            <canvas
              ref={previewCanvasRef}
              style={{
                border: '1px solid black',
                objectFit: 'contain',
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            />
          </div>
          <div>
            <button onClick={onDownloadCropClick}>프로필 설정</button>
            <a
              ref={hiddenAnchorRef}
              download
              style={{
                position: 'absolute',
                top: '-200vh',
                visibility: 'hidden',
              }}
            >
              Hidden download
            </a>
          </div>
        </>
      )}
    </uis.EditImageCtnr>
  )
}
export default UploadImg;