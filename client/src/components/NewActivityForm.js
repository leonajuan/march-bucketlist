import { useState } from 'react'

function NewActivityForm({ setActivities }) {

  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [address, setAddress] = useState('')
  const [image, setImage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        image: image,
        location: location,
        address: address
      })
    })
      .then(res => res.json())
      .then(newActivity => {
        setActivities(newActivity)
      })
  }

  return (
    <>
      <h3 className='form-header'>Add A New Activity</h3>
      <div className='form-div'>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Activity Name</label>
          <input type='text' name='name' onChange={(e) => setName(e.target.value)} />
          <label htmlFor='location'>Location</label>
          <input type='text' name='location' onChange={(e) => setLocation(e.target.value)} />
          <label htmlFor='address'>Address</label>
          <input type='text' name='address' onChange={(e) => setAddress(e.target.value)} />
          <label htmlFor='image'>Image URL</label>
          <input type='text' name='image' onChange={(e) => setImage(e.target.value)} />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default NewActivityForm;