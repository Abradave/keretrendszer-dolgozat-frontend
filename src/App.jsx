import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import TransportCard from './components/TransportCard';
import { useEffect, useState } from 'react';
import TransportForm from './components/TransportForm';


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

  const createVehicle = async () => {
    const response = await fetch(backend_url, {
      method: "POST",
      body: JSON.stringify(vehicle),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const data = await response.json();
    if (response.ok) {
      readVehicle();
    } else {
      alert(data.message);
    }
  }

  return (<main className='container'>
    <section>
      <h2>New Vehicle</h2>
      <TransportForm onSubmit={createVehicle}/>
    </section>
    <section>
      <h2>Vehicles list:</h2>
    <div className='row row-cols-lg-2 row-cols-1'>
      {vehicle.map(vehicle => <TransportCard vehicle={vehicle} key={vehicle.id}/>)}
    </div>
    </section>
  </main>);
}

export default App
