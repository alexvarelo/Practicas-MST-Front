import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Register } from '../../api/auth';
import Lowdb from 'lowdb';

function RegisterForm() {


    const { register, handleSubmit } = useForm();


    const [username, setusername] = useState('');
    const [useremail, setuseremail] = useState('');
    const [password, setpassword] = useState('');


    useEffect(() => {
        setusername('');
        setuseremail('');
        setpassword('');
    }, []);

    const onSubmit = (e) => {
        console.log(e);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">
                    <p>User name</p>
                    <input
                        type="text"
                        {...register('username', { required: true })}
                        name="username"
                        value={username}
                        onChange={ev => {
                            setusername(ev.target.value);
                        }}
                    />
                </label>

                <label htmlFor="email">
                    <p>Email</p>
                    <input
                        type="text"
                        {...register('email', { required: true })}
                        name="email"
                        value={useremail}
                        onChange={ev => {
                            setuseremail(ev.target.value);
                        }}
                    />
                </label>

                <label htmlFor="password">
                    <p>Password</p>
                    <input
                        type="password"
                        {...register('password', { required: true })}
                        name="password"
                        value={password}
                        onChange={ev => {
                            setpassword(ev.target.value);
                        }}
                    />
                    <p>
                        At least 8 characters
                    </p>
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;
