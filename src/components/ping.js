import React, { useState } from 'react'
import '../App.css'

const Ping = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    dob: '',
  })
  const [data, setData] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault() // Prevents page reload
    setData((prevData) => [...prevData, form])
    console.log('Form Data:', form)
  }

  return (
    <div>
      <form id="form" className="form" onSubmit={handleSubmit}>
        <input
          id="fullname"
          className="input"
          name="fullName"
          value={form.fullName} // Use the correct state variable
          onChange={handleChange}
          placeholder="Put your name"
        />
        <br />
        <br />
        <input
          id="email"
          className="input"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Put your email"
        />
        <br />
        <br />
        <input
          id="dob"
          className="input"
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
          placeholder="Put your date of birth"
        />
        <br />
        <br />
        <button
          type="submit"
          className="input"
          style={{ backgroundColor: 'darkblue' }}
        >
          Submit
        </button>
      </form>
      <center>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>FULL NAME</th>
                <th>EMAIL ACOUNT</th>
                <th>DATE OF BIRTH</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  )
}

export default Ping
