import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
// import './nav.css'

function EditRecord() {
  const {id} = useParams()

  const [record, setRecord] = useState({
    title: " ",
    speedFHWA: "",
    AdditionalRemarks: "",
    date: " ",
    id: " "

  })
  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');
  const [result3, setResult3] = useState('');
  const history = useNavigate()

  useEffect(() => {
    const getRecord = async () => {
      const token = localStorage.getItem('tokenStore')
      if (id) {
        const res = await axios.get(`/api/records/${id}`, {
          headers: { Authorization: token }
        })
     setRecord({
      title: res.data.title,
      speedFHWA: res.data.speedFHWA,
      AdditionalRemarks: res.data.AdditionalRemarks,
      content : res.data.content,
      date: new Date(res.data.date).toLocaleDateString() ,
      id:res.data._id
     })
      }
    }

    getRecord()
  },[id])

  const onChaneInput = e => {
    const { name, value } = e.target;
    setRecord({ ...record, [name]: value })
  }
  const performCalculation = () => {
    const speedFHWA = parseFloat(record.speedFHWA);
    const calculatedResult1 = 38.1 * Math.log10(speedFHWA) - 2.4;
    const calculatedResult2 = 33.9 * Math.log10(speedFHWA) + 16.4;
    const calculatedResult3 = 24.6 * Math.log10(Math.log10(speedFHWA)) + 38.5;
    setResult1(calculatedResult1);
    setResult2(calculatedResult2);
    setResult3(calculatedResult3);

  };
  const editRecord = async e => {
    
    e.preventDefault()
    try {
      performCalculation();
      const token = localStorage.getItem('tokenStore')
      if (token) {
        const { title, speedFHWA,AdditionalRemarks, date,id } = record;
        const newRecord = {
          title,  speedFHWA,AdditionalRemarks, date
        }

        await axios.put(`/api/records/${id}`, newRecord, {
          headers: { Authorization: token }
        })

        // return history.push('/')
       

      }

    } catch (err) {
      // window.location.href = "/";
      console.log(err);
    }
  }



  return (
    <div className="create-record">
      <h3>Edit Original FHWA model</h3>

      <form onSubmit={editRecord} autoComplete='off'>
        <div className="row">
          <label htmlFor="title">Title</label>
          <input type="text" id='title' name="title"
            value={record.title} required onChange={onChaneInput}
          />
        </div>

        <div className="row">
          <label htmlFor="speedFHWA">Enter the Speed of the vehicle</label>
          <input
            type="number"
            id="speedFHWA"
            name="speedFHWA"
            value={record.speedFHWA}
            onChange={onChaneInput}
            required
          />
        </div>

        <div className="row">
          <label htmlFor="AdditionalRemarks">Additional Remarks</label>
          <textarea
            cols="10"
            rows="10"
            type="textarea"
            id="AdditionalRemarks"
            name="AdditionalRemarks"
            value={record.AdditionalRemarks}
            required
            onChange={onChaneInput}
          ></textarea>
        </div>

        <label htmlFor="date">Date:{record.date}</label>
        <div className="row">
          <input type="date" id='date' name="date"
         onChange={onChaneInput}
          />
        </div>

        <button type='submit'>save the updated</button>
        <div>Automobile noise level: {result1}</div>
        <div>Medium truck noise level: {result2}</div>
        <div>Heavy truck noise level: {result3}</div>
      </form>
    </div>
  )
}

export default EditRecord