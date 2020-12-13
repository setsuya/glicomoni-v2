import React, { useState } from 'react';
import Cookies from 'universal-cookie';

import { BiCalendarHeart, BiLockOpenAlt, BiLogIn } from "react-icons/bi";

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Block, Title, InputGroup } from './styles';

const cookies = new Cookies();

export default function Login() {
  const [password, setPassword] = useState('');
  const [focusPassword, setFocusPassword] = useState(false);

  function checkPassword() {
    if (password === process.env.REACT_APP_PASSWORD) {
      const today = new Date();
      const expiringDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());

      cookies.set('glicomoni_logged_in', 'true', { path: '/', expires: expiringDate, });

      window.location.reload();
    } else {
      setPassword('');
      setFocusPassword(true);
    }
  }

  return (
    <Container>
      <Block>
        <Title>
          <BiCalendarHeart />&nbsp;GlicoMoni
        </Title>
      </Block>
      <Block>
        <InputGroup focus={focusPassword}>
          <BiLockOpenAlt />
          <Input
            type="password"
            value={password}
            size="240"
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
            onFocus={() => {
              setFocusPassword(true);
            }}
            onBlur={(ev) => {
              setFocusPassword(false);
            }}
          />
        </InputGroup>
      </Block>
      <Block>
        <Button text={<><BiLogIn />&nbsp;Log In</>} onClick={checkPassword} />
      </Block>
    </Container>
  );
}
