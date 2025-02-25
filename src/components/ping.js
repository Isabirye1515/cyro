import React, { useState } from "react";

const Ping = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    dob: "",
  });
  const [data,setData] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    setData((prevData)=>[...prevData,form])
    console.log("Form Data:", form);
  };

  return (
    <div>
      <form 
      id="form"
      className="form"
      onSubmit={handleSubmit}>
        <input
          id="fullname"
          className="full-name"
          name="fullName"
          value={form.fullName} // Use the correct state variable
          onChange={handleChange}
          placeholder="Put your name"
        />
        <input
          id="email"
          className="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Put your email"
        />
        <input
          id="dob"
          className="dob"
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
          placeholder="Put your date of birth"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <table>
            <thead>
                <tr>
                    <th>FULL NAME</th>
                    <th>EMAIL ACOUNT</th>
                    <th>DATE OF BIRTH</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item,index)=>(
                <tr key={index} >
                    <td>{item.fullName}</td>
                    <td>{item.email}</td>
                    <td>{item.dob}</td>
                </tr>
            ))}
            </tbody>
            
        </table>
      </div>
    </div>
  );
};

export default Ping;
