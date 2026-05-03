import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Main = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  background: #f5f7fa;
  padding: 20px;
`;