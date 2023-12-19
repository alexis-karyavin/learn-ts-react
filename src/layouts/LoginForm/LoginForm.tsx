import { ChangeEvent, useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import styles from './LoginForm.module.css';
import FormItemWrapper from '../../components/FormItemWrapper/FormItemWrapper';

function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <form className={styles.loginForm} onSubmit={onSubmit}>
      <FormItemWrapper>
        <Input
          value={login}
          onChange={onChangeLogin}
          className={styles.inputLogin}
          label="Ваш email"
          placeholder="Email"
        />
      </FormItemWrapper>

      <FormItemWrapper>
        <Input
          type="password"
          value={password}
          onChange={onChangePassword}
          className={styles.inputPassword}
          label="Ваш пароль"
          placeholder="Password"
        />
      </FormItemWrapper>

      <Button size="xl" className={styles.btnLogin}>
        Вход
      </Button>

      <div className={styles.footerPage}>
        <p>Нет аккаунта</p>
        <a href="#">Зарегистрироваться</a>
      </div>
    </form>
  );
}

export default LoginForm;
