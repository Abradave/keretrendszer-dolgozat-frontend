import PropTypes from "prop-types";

function TransportCard(props) {
    const {vehicle, editClick, deleteClick} = props
    return (     
    <div className="col">
        <div className="card h-100">
            <div className="card-header">
                <h4>{vehicle.id}</h4>
            </div>
            <div className="card-body">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Model</th>
                            <td>{vehicle.model}</td>
                        </tr>
                        <tr>
                            <th>Year</th>
                            <td>{vehicle.year_made}</td>
                        </tr>
                        <tr>
                            <th>Capacity</th>
                            <td>{vehicle.capacity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="card-footer">
                <div className="d-grid">
                    <button className="btn btn-warning" onClick={() => {editClick(vehicle.id)}}>Edit</button>
                    <button className="btn btn-danger" onClick={() => {deleteClick(vehicle.id)}}>Delete</button>
                </div>
            </div>
        </div>
    </div>
    )    
}

TransportCard.propTypes = {
    vehicle: PropTypes.object.isRequired,
    editClick : PropTypes.func.isRequired,
    deleteClick : PropTypes.func.isRequired
}

export default TransportCard;