import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Panel = styled.div`
  background: white;
  border-radius: 18px;
  padding: 18px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.05);

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const DeviceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const DeviceIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(30, 107, 214, 0.1);
  color: ${theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const DeviceTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const DeviceDescription = styled.p`
  margin-top: 4px;
  font-size: 0.88rem;
  color: ${theme.colors.muted};
  line-height: 1.45;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
`;

export const DeviceActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
`;

export const DeviceAction = styled.button<{ danger?: boolean }>`
  min-height: 84px;
  padding: 14px 10px;
  border-radius: 14px;
  border: 1px solid ${({ danger }) => (danger ? 'rgba(239, 68, 68, 0.35)' : 'rgba(15, 23, 42, 0.1)')};
  background: ${({ danger }) => (danger ? 'rgba(254, 226, 226, 0.85)' : '#ffffff')};
  color: ${({ danger }) => (danger ? '#dc2626' : theme.colors.text)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  span {
    font-size: 0.9rem;
    line-height: 1.15;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 18px rgba(15, 23, 42, 0.06);
  }
`;