function Activity({ activity }) {
  return (
    <div className='card'>
      <h2 className='card-name'>{activity.name}</h2>
      <img className='card-image' src={activity.image} alt={activity.name} />
      <h3 className='card-location'>{activity.location}</h3>
      <h4 className='card-address'>{activity.address}</h4>
      <p className='card-completed'>{activity.show_completed}</p>
    </div>
  )
}

export default Activity;