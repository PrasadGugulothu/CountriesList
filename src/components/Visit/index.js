import './index.css'

const Visit = props => {
  const {visitDetails, deleteVisitCountry} = props
  const {name, imageUrl, id} = visitDetails

  const remove = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="list-item">
      <div className="visit-container">
        <img src={imageUrl} className="image" alt="thumbnail" />
        <div className="name-section">
          <p className="para">{name}</p>
          <button className="delete-button" type="button" onClick={remove}>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default Visit
