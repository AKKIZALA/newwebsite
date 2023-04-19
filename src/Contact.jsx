import React, { useState } from 'react'

const Contact = () => {
  const [data,setdata] = useState({
    fullname:"",
    Phone:"",
    Email:"",
    msg:""
  })

  const InputEvent = (event) => {
    const {name , value} = event.target

    setdata((preval) => {
      return {
        ...preval,
        [name]:value
      } 

    })
  }

  const submitfom = (e) => {
    e.preventDefault()
    alert(`Your Name is ${data.fullname}
    Your Mobile Number is ${data.Phone}
    Your Email is ${data.Email}
    Your Message is ${data.msg}`)

  }
  return (
    <>
    <div className="my-5">
      <h1 className='text-center'> Contect Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={submitfom}>
          <div className="mb-3">
            <label  className="form-label">Fullname</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={data.fullname} onChange={InputEvent} name='fullname' placeholder="Type your Name"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Phone number</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" value={data.Phone} onChange={InputEvent} name='Phone' placeholder="Typr your Phone number"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" value={data.Email} onChange={InputEvent} name='Email' placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={data.msg} onChange={InputEvent} name='msg' ></textarea>
          </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact