
const geocoder = new google.maps.Geocoder(); // geocoder 객체 초기화

export const performReverseGeocode = (
  latLng: google.maps.LatLng,
  callback: (address: string) => void
) => {
  geocoder.geocode({ location: latLng }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK && results) {
      callback(results[0].formatted_address);
    } else {
      console.error('Google Maps Reverse Geocoding Error: ', status);
    }
  });
};
