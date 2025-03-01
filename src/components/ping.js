import React, { useState } from 'react'
import '../App.css'
import {
  Column,
  Grid,
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderName,
} from '@carbon/react'
import { ImageSearch } from '@carbon/icons-react'

const Ping = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    dob: '',
    occupation: '',
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
    <>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <Header className="header">
            <HeaderName>This A demo testing git</HeaderName>
            <HeaderGlobalBar>
              <HeaderGlobalAction>
                <ImageSearch size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        </Column>
      </Grid>
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <Grid>
          <Column lg={8} md={4} sm={4}>
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
        <input
          id="fullname"
          className="input"
          name="occupation"
          value={form.occupation} // Use the correct state variable
          onChange={handleChange}
          placeholder="Your Job"
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
            </Column>
        </Grid>
        <Grid>
          <Column lg={8} md={4} sm={4}>
      <center>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>FULL NAME</th>
                <th>EMAIL ACOUNT</th>
                <th>DATE OF BIRTH</th>
                <th>OCCUPATION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.dob}</td>
                  <td>{item.occupation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
          </Column>
        </Grid>
      </Column>
    </Grid>
      </>
  )
}

export default Ping
