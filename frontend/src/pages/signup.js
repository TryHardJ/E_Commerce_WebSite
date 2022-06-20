import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Axios from 'axios';
//import { Link, useNavigate } from 'react-router-dom';

function Signup(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function createUser(){
        Axios.post('http://localhost:3001/signup', {
        username: username, 
        email: email,
        password: password
        }).then(()=>{
            alert("successful insert")
        });
        
    }

    /*let page = useNavigate();

    const createPost = (e) =>{
        e.preventDefault();
        page('/');
    }*/

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Control className ='Input'
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    placeholder = "Create Username" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Control className ='Input'
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                    placeholder = "Enter Email" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Control className ='Input'
                    onChange={e => setPassword(e.target.value)}
                    type="text"
                    placeholder = "Create Password" required/>
                </Form.Group>
                <Button onClick={e => createUser(e)} type="submit">Submit</Button>
            </Form>
        </div>
    )
}
export default Signup;

/* 
            <label>username</label>
            <input type="text"
                name='username'
                onChange={(e) => setUsername(e.target.value)} />
            <label>email</label>
            <input type="text"
                name='email'
                onChange={(e) => setEmail(e.target.value)} />
            <label>password</label>
            <input type="text"
                name='password'
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={createUser}>Submit</button>*/