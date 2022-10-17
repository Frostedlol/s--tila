import { useEffect, useState } from 'react';
import './App.css';
import Weather from './components/weather';


function App() {
  const [lat, setlat] = useState(0)
  const [lng, setlng] = useState(0)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setlat(position.coords.latitude)
        setlng(position.coords.longitude)
        setIsLoading(false)
      }, (error) => {
        console.log(error)
        alert("Paikannus epäonnistui!")
      })
    }
    else {
      alert("Selaimesi ei tue paikannusta!")
    }
  }, [])

  if (isLoading) {
    return <p>Ladataan sijaintia...</p>
  }
  else {

    return (
      <div className="content">
        
      
        <h3>Your position</h3>
        <p>
          Position&nbsp;
         {lat.toFixed(3)},
         {lng.toFixed(3)}
        </p>
        <Weather lat={lat} lng={lng} />
      </div>
    );
  }
}

export default App;
