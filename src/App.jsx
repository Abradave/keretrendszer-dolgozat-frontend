import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import TransportCard from './components/TransportCard';
import { useEffect, useState } from 'react';
import TransportForm from './components/TransportForm';


function App() {
  const backend_url="http://localhost:8000/api/public_transports";
  const [vehicles, setVehicle] = useState([]);
  const [updateId, setUpdateID] = useState(0);
  const [updateVehicleData, setUpdateVehicleData] = useState(null);
  useEffect(() => {
    readVehicle();
  }, []);

  const readVehicle = async () => {
    const response = await fetch(backend_url);
    const data = await response.json();
    setVehicle(data);
  }

  const createVehicle = async (vehicle) => {
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
      return true;
    } else {
      alert(data.message);
      return false;
    }
  }

  const deleteVehicle = async (id) => {
    const response = await fetch(`${backend_url}/${id}`, {
      method : "DELETE",
      headers : {
        Accept : "application/json"
      }
    });
    if (response.ok) {
      readVehicle();
    } else {
      const data = await response.json();
      alert(data.message);
    }
  }

  const loadEditForm = async (id) => {
    setUpdateID(id);
  }

  const readSingleVehicle = async () => {
    const response = await fetch(`${backend_url}/${updateId}`, {
      headers : {
        Accept : "application/json"
      }
    });
    const data = await response.json();
    if (response.ok) {
      setUpdateVehicleData(data);
    }
    else {
      setUpdateVehicleData(null);
      alert(data.message);
    }
  }

  const updateVehicle = async (vehicle) => {
    const response = await fetch(`${backend_url}/${updateId}`,{
      method : "PATCH",
      body : JSON.stringify(vehicle),
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    if (response.ok) {
      readVehicle();
      setUpdateID(0);
      return true;
    }
    else {
      alert(data.message);
      return false;
    }
  }

  useEffect(() => {
    if (updateId == 0) {
      setUpdateVehicleData(null);
    }
    else {
      readSingleVehicle();
    }
    readSingleVehicle(updateId);
  }, [updateId]);

  return (<main className='container'>
    <section>
    {
      updateVehicleData == null ?
      <>
        <h2>New Vehicle</h2>
        <TransportForm onSubmit={createVehicle}/>
      </>
      :
      <>
        <h2>{updateVehicleData.id} data edit</h2>
        <TransportForm onSubmit={updateVehicle} buttonText={"Update"} vehicle={updateVehicleData}/>
      </>
    }
    </section>
    <section>
      <h2>Vehicles list:</h2>
    <div className='row row-cols-lg-2 row-cols-1 gy-3'>
      {vehicles.map(vehicle => <TransportCard vehicle={vehicle} key={vehicle.id} editClick = {loadEditForm} deleteClick={deleteVehicle}/>)}
    </div>
    </section>
  </main>);
}

export default App
