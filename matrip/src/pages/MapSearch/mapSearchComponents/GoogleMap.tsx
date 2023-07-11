import React, { useState, useRef, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox
} from '@react-google-maps/api';

import { performReverseGeocode } from './geocode'

import * as ms from '../mapPageStyle';


interface GoogleMapComponentProps {
  zoom: number;
  center: { lat: number; lng: number };
  // maker는 여러개가 될 수 있음
  // markers: { lat: number; lng: number };
}


const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  zoom,
  center,
  // markers
}) => {
  const [mapCenter, setMapCenter] = useState(center);
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();

  //우클릭한 위치에 대한 정보
  const [clickedLocation, setClickedLocation] = useState<google.maps.LatLngLiteral>();
  const [clickedAddress, setClickedAddress] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  // 지도 우클릭하면 바뀌는 위치 정보를 검색창에도 반영 
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = clickedAddress;
    }
  }, [clickedAddress]);



  //StandaloneSearchBox 컴포넌트의 인스턴스를 참조
  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  /**
   * 맵에 표기되는 정보에 대한 옵션 설정
   * 위성지도 등
   */
  const mapOptions = {
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    styles: ms.customStyles
  };

  /**
   * 위치 검색에 대한 onChange함수
   * 검색 결과 값 중 선택한 장소에 대한 위도 경도 값을 setMapCenter()
   */
  const onPlacesChanged = () => {
    if (searchBox) {
      // places는 검색 결과중 하나를 선택한 결과값
      const places = searchBox.getPlaces();
      if (places && places.length === 1) {
        // 위도 경도 값
        const place = places[0].geometry?.location;
        // const placeName = places[0].name;
        const placeAddress = places[0].formatted_address;
        console.log(places[0])

        if (place && placeAddress) {
          setMapCenter({ lat: place.lat(), lng: place.lng() });
          setClickedLocation({ lat: place.lat(), lng: place.lng() });
          setClickedAddress(placeAddress)
        }
      }
    }
  };

  const onMapRightClick = (e: google.maps.MapMouseEvent) => {
    const location = e.latLng;

    if (!location){return} 

    const newLoc = {
      lat: e.latLng?.lat()!,
      lng: e.latLng?.lng()!,
    }

    // Reverse geocode를 실행하여 주소 가져오기
    if (location) {
      performReverseGeocode(location, (res) => {
        if (res && newLoc) {
          setClickedAddress(res.address)
          setClickedLocation(newLoc);
        }
      });
    }
  };


  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY || ''}
        libraries={['places']}
      >
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <ms.LocationSearchInput ref={inputRef} type='text' placeholder='Search location' />
        </StandaloneSearchBox>
        <GoogleMap
          mapContainerStyle={{
            zIndex: 999,
            width: '100%',
            paddingBottom: '80%',
            position: 'relative'
          }}
          zoom={zoom}
          center={mapCenter}
          options={mapOptions}
          onRightClick={onMapRightClick}
        >
          {clickedLocation &&
            <Marker
              key={clickedLocation.lat + clickedLocation.lng}
              position={{ lat: clickedLocation.lat, lng: clickedLocation.lng }}
              onClick={(e: google.maps.MapMouseEvent) => console.log('cliecked')}
              icon={ms.markerIcon}
            />
          }
        </GoogleMap>
      </LoadScript>
      {clickedAddress &&
        <div>
          <h3>FOR DEV : 지도위에 우클릭하시면 됩니당</h3>
          <h1>{clickedAddress}</h1>
        </div>
      }
    </>
  );
};

export default GoogleMapComponent;
