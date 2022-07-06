import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Login = () => (
  <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input type='email' placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type='password' placeholder='Password' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Log in</Button>
  </Form>
)

export default Login