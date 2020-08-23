import React, { useCallback, useState, FormEvent, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

interface ISignInValues {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [values, setValues] = useState({
    email: 'test@email.com',
    password: '12345678',
  } as ISignInValues);

  const { loading, data, error } = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();

  console.log(loading, data, error);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }, [values]);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    dispatch(signInRequest(values));
  }, [values, dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Faça o seu logon</h1>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">
        {loading ? 'Carregando...' : 'Entrar'}
      </button>
    </form>
  );
};

export default SignIn;
