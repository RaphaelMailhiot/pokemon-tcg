import React from 'react';
import Header from "@/app/components/Header/Header";

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
    const users: User[] = await res.json();

    return (
        <>
            <Header/>
            <main className={'flex justify-center'}>
                <div className='container'>
                    <h1>Users</h1>
                    <p>{new Date().toLocaleDateString()}</p>
                    <table className='table table-bordered'>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        </thead>

                        <tbody>
                        {users.map(user => <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>)}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default UsersPage;