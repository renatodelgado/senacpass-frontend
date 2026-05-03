import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Panel = styled.section`
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.05);
  padding: 14px;
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PanelTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

export const PanelIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const PanelTitle = styled.h3`
  font-size: 0.88rem;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const AlertsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;