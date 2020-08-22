import React, { useCallback, useState, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

interface ISignInValues {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isSignedIn, loadingSignInRequest } = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();

  console.log(loadingSignInRequest);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!isSignedIn) {
      dispatch(signInRequest({
        email,
        password,
      }));
    }
  }, [email, password, isSignedIn, dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Faça o seu logon</h1>
      <input
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        defaultValue={'johndoe@example.com'}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        defaultValue={'secret'}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default SignIn;
