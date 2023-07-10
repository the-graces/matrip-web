import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox
} from '@react-google-maps/api';
import { styled } from 'styled-components';

import { performReverseGeocode } from './geocode'

import * as ms from '../mapPageStyle';


interface GoogleMapComponentProps {
  zoom: number;
  center: { lat: number; lng: number };
  // maker는 여러개가 될 수 있음
  markers: Array<{ lat: number; lng: number }>;
}

interface PickLocationInfo {
  name: string;
  lat: number;
  lng: number;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  zoom,
  center,
  markers
}) => {
  const [mapCenter, setMapCenter] = useState(center);
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();
  const [pickedLoction, setPickedLocation] = useState<PickLocationInfo>();
  const [clickedLocation, setClickedLocation] = useState<google.maps.LatLng>();
  const [addressAtClickedLocation, setAddressAtClickedLocation] = useState<string>();

  console.log(mapCenter);
  console.log(pickedLoction);

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
        const placeName = places[0].name;

        if (place && placeName) {
          setMapCenter({ lat: place.lat(), lng: place.lng() });
          setPickedLocation({
            name: placeName,
            lat: place.lat(),
            lng: place.lng()
          });
        }
      }
    }
  };

  const onMapRightClick = (e: google.maps.MapMouseEvent) => {
    const location = e.latLng;
  
    // Reverse geocode를 실행하여 주소 가져오기
    if (location){
      performReverseGeocode(location, (address) => {
        console.log(address);
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
          <ms.LocationSearchInput type='text' placeholder='Search location' />
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
          {mapCenter && <Marker key={'selectedPlace'} position={mapCenter} />}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default GoogleMapComponent;
