import axios from 'axios';
import { useContext, useState } from 'react';
import type { FormEvent } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import {
  Button,
  Container,
  ErrorMessage,
  Form,
  Input,
  InputGroup,
  Label,
  LoginBox,
  Title,
} from './styles';

function getLoginErrorMessage(error: unknown) {
  if (!axios.isAxiosError(error)) {
    return 'Não foi possível concluir o login.';
  }

  if (!error.response) {
    return 'Não foi possível acessar a API. Verifique a URL publicada e a configuração de CORS.';
  }

  if (error.response.status === 401 || error.response.status === 403) {
    return 'E-mail ou senha inválidos.';
  }

  const apiMessage = error.response.data?.message || error.response.data?.error;
  return typeof apiMessage === 'string'
    ? apiMessage
    : `A API retornou um erro (${error.response.status}).`;
}

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login({ email: email.trim(), password });
    } catch (loginError) {
      setError(getLoginErrorMessage(loginError));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <LoginBox>
        <Title>SenacPass</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </Form>
      </LoginBox>
    </Container>
  );
}
