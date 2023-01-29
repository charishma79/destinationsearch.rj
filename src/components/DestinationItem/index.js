// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li className="list">
      <img src={imgUrl} alt={name} />
      <p className="place">{name}</p>
    </li>
  )
}

export default DestinationItem
