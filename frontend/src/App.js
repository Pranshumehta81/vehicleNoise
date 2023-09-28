import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Login from './components/Login';
import Records from './components/Records';

import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem('tokenStore')
      if (token) {
        const verified = await axios.get('/user/verify', {
          headers: { Authorization: token }
        })
        setIsLogin(verified.data)
        if(verified.data === false )return localStorage.clear()
      } else {
        setIsLogin(false)
      }
    }
    checkLogin()
  },[])

  return (
    <div className="App">
      {
        isLogin ?
          <Records setIsLogin={setIsLogin} /> :
          <Login setIsLogin={setIsLogin} />
      }

    </div>
  );
}

export default App;

