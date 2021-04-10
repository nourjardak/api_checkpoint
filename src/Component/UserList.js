import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState()
    useEffect(() => {
        async function GetList() {
            try {
                const res= await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
            console.log(users)
            } catch (err) {
                setError(err)
                console.log(error)  
            }}
       GetList()
    })
    return (
        <div className="container-fluid">
          {users.map((user,index)=><UserCard user={user} key={index}/>)}  
        </div>
    )
}

export default UserList
