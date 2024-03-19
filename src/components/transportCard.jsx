import PropTypes from "prop-types";

function PublicTransport(props) {
    const {mani} = props
    return (     
    <div className="col">
        <div className="card">
            <div className="card-header">
                {mani.model}
            </div>
            <div className="card-body">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Model</th>
                            <td>{mani.model}</td>
                        </tr>
                        <tr>
                            <th>Year</th>
                            <td>{mani.year_made}</td>
                        </tr>
                        <tr>
                            <th>Capacity</th>
                            <td>{mani.capacity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )    
}

transportCard.propTypes = {
    type: PropTypes.object.isRequired
}

export default PublicTransport;