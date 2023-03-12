import Activity from '../components/Activity'

function ActivitiesList({ activities }) {

  const activitiesComponents = activities.map(activity => {
    return <Activity key={activity.id} activity={activity} />
  })

  return (
    <div>
      <li>{activitiesComponents}</li>
    </div>
  )
}

export default ActivitiesList;