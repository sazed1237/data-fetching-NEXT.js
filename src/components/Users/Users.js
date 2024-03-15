
"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    return (
        <div>
            <h1>All Users : {users.length}</h1>

            {
                users.map(user => <div key={user.id} className="card w-[70%] mx-auto my-5 bg-gray-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Name: {user.name}</h2>
                        <p className='mt-5 text-purple-500'>City: {user.address.city}</p>
                        <p>Email: {user.email}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/users/${user.id}`}>
                                <button className="btn btn-primary">See More</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;