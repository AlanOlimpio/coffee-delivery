import { MapPin } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';
import { WrapperLocation } from './LocationStyled';
// import { useEffect, useState } from 'react';

function Location() {
  //   const [position, setPosition] = useState('');

  //   useEffect(() => {
  //     if ('geolocation' in navigator) {
  //       navigator.geolocation.getCurrentPosition(function (location) {
  //         fetch(
  //           `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.coords.latitude}&lon=${location.coords.longitude}`,
  //           {
  //             method: 'GET',
  //           },
  //         )
  //           .then((response) => response.json())
  //           .then((data) => {
  //             setPosition(data.address.city_district);
  //           });
  //       });
  //     } else {
  //       setPosition('Ocorreu um erro');
  //       console.log('Geolocation is not available in your browser.');
  //     }
  //   }, []);
  return (
    <WrapperLocation>
      <MapPin
        color={defaultTheme.font.color['purple-dark']}
        size={22}
        weight="fill"
      />
      <span>Carapicuíba, SP</span>
    </WrapperLocation>
  );
}

export default Location;
