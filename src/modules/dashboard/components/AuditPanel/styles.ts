import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Panel = styled.section`
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.05);
  padding: 18px;
`;

export const PanelHeader = styled.div`
  margin-bottom: 14px;
`;

export const PanelTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const QuickAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid rgba(15, 23, 42, 0.04);
`;

export const QuickActionText = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  min-width: 0;

  > div {
    min-width: 0;
  }
`;

export const QuickActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 10px;
  background: ${theme.colors.primary};
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 600;
  box-shadow: 0 6px 14px rgba(30, 107, 214, 0.12);
  border: none;
`;

export const LogsTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  color: ${theme.colors.muted};
  font-size: 0.9rem;
  font-weight: 600;
`;

export const LogsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 160px;
  overflow-y: auto;
`;

export const LogItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.86rem;
  color: ${theme.colors.muted};
`;

export const LogLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-width: 0;
`;

export const LogIcon = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(30, 107, 214, 0.08);
  color: ${theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const LogText = styled.span`
  min-width: 0;
  color: ${theme.colors.muted};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.8rem;
`;

export const LogTime = styled.span`
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  color: ${theme.colors.muted};
  font-size: 0.78rem;
`;