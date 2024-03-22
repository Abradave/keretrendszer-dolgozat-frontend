import { useRef } from "react";
import PropTypes from "prop-types";

function TransportForm(props){
    const modelRef = useRef(null)
    const yearRef = useRef(null)
    const capacityRef = useRef(null)
    const {onSubmit} = props

    const createVehicle = async () => {
        const vehicle = {
            model: modelRef.current.value,
            year_made: yearRef.current.value,
            capacity: capacityRef.current.value,
        };
        const success = await onSubmit(vehicle)
        if (success) {
            resetForm();
        }
    }

    const resetForm = () => {
        modelRef.current.value = "";
        yearRef.current.value = "";
        capacityRef.current.value = "";
    }

    return (<form onSubmit={event => {event.preventDefault(); createVehicle();}}>
        <div  className="mb-3">
            <label htmlFor="model" className="form-label">Model</label>
            <input type="text" className="form-control" id="model" placeholder="Model" ref={modelRef}/>
        </div>
        <div  className="mb-3">
            <label htmlFor="year" className="form-label">Year</label>
            <input type="date" className="form-control" id="year" placeholder="Year" ref={yearRef}/>
        </div>
        <div  className="mb-3">
            <label htmlFor="capacity" className="form-label">Capayity</label>
            <input type="number" className="form-control" id="capacity" placeholder="Capacity" ref={capacityRef}/>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
    </form>);
}

TransportForm.propTypes ={
    onSubmit: PropTypes.func.isRequired
}

export default TransportForm;