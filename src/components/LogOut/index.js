import React from 'react';
import Cookies from 'universal-cookie';

import { BiLogOut } from 'react-icons/bi';

import { Container } from './styles';

const cookies = new Cookies();

export default function LogOut() {
  function logOut() {
    cookies.remove('glicomoni_logged_in');

    window.location.reload();
  }

  return (
    <Container>
      <div onClick={logOut}>
        <BiLogOut />&nbsp;Log out
      </div>
    </Container>
  );
}