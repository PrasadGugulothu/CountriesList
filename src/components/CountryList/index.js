import './index.css'

const CountryList = props => {
  const {details, addVisitedCountry} = props
  const {id, isVisited, name} = details

  const addCountry = () => {
    addVisitedCountry(id)
  }

  const countryText = isVisited ? 'Visited' : 'Visit'
  return (
    <li className="country-list-item">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="visit-text">{countryText}</p>
      ) : (
        <button type="button" className="button" onClick={addCountry}>
          {countryText}
        </button>
      )}
    </li>
  )
}

export default CountryList
