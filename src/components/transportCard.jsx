import PropTypes from "prop-types";

function TransportCard(props) {
    const {vehicle} = props
    return (     
    <div className="col">
        <div className="card">
            <div className="card-header">
                {vehicle.id}
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
        </div>
    </div>
    )    
}

TransportCard.propTypes = {
    vehicle: PropTypes.object.isRequired
}

export default TransportCard;