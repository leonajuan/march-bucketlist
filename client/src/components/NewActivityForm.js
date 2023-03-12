function NewActivityForm() {
  return (
    <div>
      <form>
        <label htmlFor='name'>Activity Name</label>
        <input type='text' name='name' />
        <label htmlFor='location'>Location</label>
        <input type='text' name='location' />
        <label htmlFor='address'>Address</label>
        <input type='text' name='address' />
        <label htmlFor='image'>Image URL</label>
        <input type='text' name='image' />
      </form>
    </div>
  )
}

export default NewActivityForm;