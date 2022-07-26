import React, { useEffect } from 'react'
import'../css/Home.css'
import { Navbar } from '../components/Navbar'
import { Products } from '../components/Products'
import { auth } from '../config/Config'
import { useHistory } from 'react-router-dom'

export const Home = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (
        <div className='wrapper'>
            <Navbar user={user} />
            <Products />
        </div>
    )
}