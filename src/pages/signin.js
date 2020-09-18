import React, { useState } from 'react';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  // cehck form input elements are valid
  // email & password

  return (
    <>
      <HeaderContainer>Sign in page to be constructed!</HeaderContainer>
      <FooterContainer />
    </>
  );
}
