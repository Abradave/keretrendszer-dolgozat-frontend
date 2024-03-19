import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import TransportCard from "./components/TransportCard";
import { useEffect, useState } from 'react';

function App() {
  const backend_url="http://localhost:8000/api/public_transports";
  const [vehicle, setVehicle] = useState([]);
  useEffect(() => {
    readVehicle();
  }, []);

  const readVehicle = async () => {
    const response = await fetch(backend_url);
    const data = await response.json();
    setVehicle(data);
  }



  return (<main className='container'>
    <div className='row row-cols-lg-2 row-cols-1'>
      {vehicle.map(vehicle => <TransportCard vehicle={vehicle} key={vehicle.id}/>)}
    </div>
  </main>);
}

export default App
