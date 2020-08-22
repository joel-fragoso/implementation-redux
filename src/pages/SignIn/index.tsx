import React from 'react';

const SignIn: React.FC = () => {
  return (
    <form>
      <h1>Faça o seu logon</h1>
      <input defaultValue="johndoe@example.com" />
      <input type="password" defaultValue="secret" />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default SignIn;
