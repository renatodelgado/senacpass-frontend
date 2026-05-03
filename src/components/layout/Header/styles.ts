import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.header`
  width: 100%;
  height: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px 0 20px;

  background: ${theme.colors.primary};
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.06);
`;

export const Status = styled.div<{ online: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 9999px;

  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;

  font-size: 0.9rem;
  font-weight: 500;

  backdrop-filter: blur(8px);
`;

export const Dot = styled.div<{ online: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;

  background: ${({ online }) => (online ? '#22C55E' : '#F87171')};
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.08);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ActionButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.3);
  }

  span {
    position: absolute;
    top: 9px;
    right: 10px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 2px ${theme.colors.primary};
  }
`;

export const User = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  min-height: 40px;
  padding: 5px 14px 5px 6px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;

  cursor: pointer;
  font-weight: 500;
  text-align: left;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.34);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.9);
    outline-offset: 2px;
  }

`;

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.28);
  flex-shrink: 0;
`;

export const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  line-height: 1;
  min-width: 0;
`;

export const UserName = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
`;

export const UserRole = styled.span`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
`;

export const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 10px);

  background: rgba(31, 41, 55, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 8px;

  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.22);
  backdrop-filter: blur(10px);

  min-width: 160px;

  div {
    padding: 9px 10px;
    border-radius: 10px;
    cursor: pointer;
    color: #ffffff;
    font-size: 0.95rem;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
    }
  }

  hr {
    margin: 6px 0;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;