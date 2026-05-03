import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
import { Container, Content, Main } from './styles';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <Container>
      <Sidebar />

      <Main>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Main>
    </Container>
  );
}