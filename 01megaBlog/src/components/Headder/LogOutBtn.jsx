import React from 'react'
import {useDispatch } from 'react-redux'
import authService from '../../appWrite/auth'
import {logOut} from '../../Store/authSlice'

function LogOutBtn() {

    const dispatch =useDispatch()

    const logOutHandler = () => {
        authService.logOut().then(() => {
            dispatch(logOut)
        })
    }

  return (
    <button
    className='inline-block px-6 py-2 duration-200
    hover:bg-blue-600 rounded-full'
    >LogOut</button>
  )
}

export default LogOutBtn