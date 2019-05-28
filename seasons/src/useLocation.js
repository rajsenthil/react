import { useState, useEffect } from 'react'

export default () => {
  const [ lat, setLat ] = useState(null);
  const [ errorMessage, setErrorMessagte ] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErrorMessagte(err.message)
    );
  }, []);

  return [lat, errorMessage];
}