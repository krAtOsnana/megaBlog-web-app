import { useState,useEffect } from 'react'
import {useDispatch} from "react-redux"
import './App.css'
import authservice from './appWrite/auth'
import {login ,logout} from './Store/authSlice'
import { Headder,Footer } from './components'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch =useDispatch()
  useEffect(() => {
    authservice.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  } ,[])



  return !loading ? (
    <div className='min-h-sc flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Headder/>
        <main>
            {/* <outlet></outlet> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
