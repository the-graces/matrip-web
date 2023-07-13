import {styled} from 'styled-components';

export const EditImageCtnr = styled.div`
    z-index: 1000;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -0%);
    background-color: grey;
    width: 600px;
    height: 600px;
`

export const CropControl = styled.div`

`

export const ImageInput = styled.input`
      appearance: none;
    border: none;
    padding: 8px;
    background-color: white;
    color: #555;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: background-color 0.2s, box-shadow 0.2s, color 0.2s;
`