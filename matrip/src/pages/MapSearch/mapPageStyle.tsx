import { styled } from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
`;

export const LocationSearchInput = styled.input`
  z-index: 9999;
  box-sizing: border-box;
  border: 1px solid #ccc;
  width: 100%;
  height: 40px;
  border-radius: 40px;

  padding: 0 15px;
`;

export const customStyles = [
  {
      'stylers': [
          {
              'saturation': -100
          },
          {
              'gamma': 1
          }
      ]
  },
  {
      'elementType': 'labels.text.stroke',
      'stylers': [
          {
              'visibility': 'off'
          }
      ]
  },
  {
      'featureType': 'poi.business',
      'elementType': 'labels.text',
      'stylers': [
          {
              'visibility': 'off'
          }
      ]
  },
  {
      'featureType': 'poi.business',
      'elementType': 'labels.icon',
      'stylers': [
          {
              'visibility': 'off'
          }
      ]
  },
  {
      'featureType': 'poi.place_of_worship',
      'elementType': 'labels.text',
      'stylers': [
          {
              'visibility': 'off'
          }
      ]
  },
  {
      'featureType': 'poi.place_of_worship',
      'elementType': 'labels.icon',
      'stylers': [
          {
              'visibility': 'off'
          }
      ]
  },
  {
      'featureType': 'road',
      'elementType': 'geometry',
      'stylers': [
          {
              'visibility': 'simplified'
          }
      ]
  },
  {
      'featureType': 'water',
      'stylers': [
          {
              'visibility': 'on'
          },
          {
              'saturation': 50
          },
          {
              'gamma': 0
          },
          {
              'hue': '#50a5d1'
          }
      ]
  },
  {
      'featureType': 'administrative.neighborhood',
      'elementType': 'labels.text.fill',
      'stylers': [
          {
              'color': '#333333'
          }
      ]
  },
  {
      'featureType': 'road.local',
      'elementType': 'labels.text',
      'stylers': [
          {
              'weight': 0.5
          },
          {
              'color': '#333333'
          }
      ]
  },
  {
      'featureType': 'transit.station',
      'elementType': 'labels.icon',
      'stylers': [
          {
              'gamma': 1
          },
          {
              'saturation': 50
          }
      ]
  }
]

export const markerIcon = {
  url: `data:image/svg+xml;utf-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="red">
      <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z" fill="#1C274C"/>
      <path d="M13.3486 3.78947L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.6864 14.0159C19.3115 13.8597 19.75 13.298 19.75 12.6538V5.28673C19.75 4.50617 19.0165 3.93343 18.2592 4.12274C16.628 4.53055 14.9097 4.41393 13.3486 3.78947Z" fill="#1C274C"/>
    </svg>`
  )}`,
  scaledSize: new google.maps.Size(40, 40),
  anchor: new google.maps.Point(20, 40),
};