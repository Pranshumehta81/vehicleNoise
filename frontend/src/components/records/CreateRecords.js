
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./createRecords.css";

function CreateRecords() {
  const [record, setRecord] = useState({
    title: "",
    speedFHWA: "",
    AdditionalRemarks: "",
    date: "",
  });
  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');
  const [result3, setResult3] = useState('');

  const history = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setRecord({ ...record, [name]: value });
  };

  const performCalculation = () => {
    const speedFHWA = parseFloat(record.speedFHWA);
    const calculatedResult1 = 38.1 * Math.log10(speedFHWA) - 2.4;
    const calculatedResult2 = 33.9 * Math.log10(speedFHWA) + 16.4;
    const calculatedResult3 = 24.6 * Math.log10(Math.log10(speedFHWA)) + 38.5;
    setResult1(calculatedResult1);
    setResult2(calculatedResult2);
    setResult3(calculatedResult3);

  };

  const createRecord = async (e) => {
    e.preventDefault();
    try {
      // Calculation logic
      performCalculation();

      const token = localStorage.getItem("tokenStore");
      if (token) {
        const { title, AdditionalRemarks, speedFHWA, date } = record;
        const newRecord = {
          title,
          speedFHWA,
          AdditionalRemarks,
          date,
        };

        await axios.post("/api/records", newRecord, {
          headers: { Authorization: token },
        });

        // return history.push("/");
      }
    } catch (err) {
      window.location.href = "/";
    }
  };

  return (
    <div className="create-record">
      <h2>Original FHWA model</h2>

      <form onSubmit={createRecord} autoComplete="off">
        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={record.title}
            required
            onChange={onChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="speedFHWA">Enter the Speed of the vehicle</label>
          <input
            type="number"
            id="speedFHWA"
            name="speedFHWA"
            value={record.speedFHWA}
            onChange={onChangeInput}
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
            onChange={onChangeInput}
          ></textarea>
        </div>

        <label htmlFor="date">Date:{record.date}</label>
        <div className="row">
          <input type="date" id="date" name="date" onChange={onChangeInput} />
        </div>

        <button type="submit">Calculate and Save</button>
        <div>Automobile noise level: {result1}</div>
        <div>Medium truck noise level: {result2}</div>
        <div>Heavy truck noise level: {result3}</div>
      </form>
    </div>
  );
}
export default CreateRecords;
