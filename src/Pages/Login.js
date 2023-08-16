import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const [hideContent, setHideContent] = useState(false);

  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user')
    setAuthenticate(true); // 클릭이 되어 제출이 된다면
    setHideContent(true); // content 클래스 숨기기
    navigate('/')

  }
  return (
    <div className='login-area'>
      <h1>로그인</h1>
      <Form className='login-form' onSubmit={(event) =>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="아이디(이메일)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="비밀번호" />
        </Form.Group>
        <Button id='loginbtn' variant="dark" type="submit">
          로그인하기
        </Button>
      </Form>
    </div>

  )
}

export default Login
