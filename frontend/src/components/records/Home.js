import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import axios from 'axios'
import './home.css'

function Home() {

    const [records, setRecords] = useState([]);
    const [token, setToken] = useState('')

    const getRecords = async (token) => {
        console.log(token)
        const res = await axios.get('api/records', {
            headers: { Authorization: token }
        })
        console.log(res)
        setRecords(res.data)
      
    }

    useEffect(() => {
        const token = localStorage.getItem('tokenStore')
       
        setToken(token)
        if (token) {
            getRecords(token)
        }

    }, [])

const deleteRecord = async(id)=>{
    try {
        if(token){
            await axios.delete(`/api/records/${id}`,{
                headers:{Authorization:token}
            })
            getRecords(token)
        }
        
    } catch (err) {
        window.location.href = '/';
    }

}



    return (
        <div className="records-wrapper">
            {
                records.map(record => (
                    <div className="card" key={record._id}>
                        <h4 title={record.title}>{record.title}</h4>
                        <div className="text-wrapper">
                            <p>{record.content}</p>

                        </div>
                        <p className='date'>{format(record.date)}</p>
                        <div className="card-footer">
                            {record.name}
                            <Link to={`edit/${record._id}`}> Edit</Link>
                        </div>
                        <button className='close' onClick={()=>deleteRecord(record._id)} >X</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Home