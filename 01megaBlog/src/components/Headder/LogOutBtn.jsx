import React from 'react'
import {useDispatch } from 'react-redux'
import authService from '../../appWrite/auth'
import {logOut} from '../../Store/authSlice'

function LogOutBtn() {

    const dispatch =useDispatch()

    const logOutHandler = () => {
        
    }

  return (
    <div>LogOutBtn</div>
  )
}

export default LogOutBtn