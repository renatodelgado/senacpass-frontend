import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Eyebrow = styled.span`
  font-size: 0.82rem;
  color: ${theme.colors.muted};
`;

export const Title = styled.h1`
  margin-top: 2px;
  font-size: clamp(1.5rem, 2vw, 2.1rem);
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const Subtitle = styled.p`
  max-width: 760px;
  margin-top: 6px;
  font-size: 0.94rem;
  line-height: 1.55;
  color: ${theme.colors.muted};
`;

export const SectionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid rgba(30, 107, 214, 0.12);
  background: rgba(30, 107, 214, 0.08);
  color: ${theme.colors.primary};
  font-size: 0.85rem;
  font-weight: 600;
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.05);
`;

export const SummaryLabel = styled.span`
  font-size: 0.84rem;
  color: ${theme.colors.muted};
`;

export const SummaryValue = styled.div`
  margin-top: 8px;
  font-size: 1.65rem;
  font-weight: 800;
  color: ${theme.colors.text};
`;

export const SummaryNote = styled.p`
  margin-top: 6px;
  font-size: 0.86rem;
  color: ${theme.colors.muted};
`;

export const Section = styled.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.05);
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const ToggleList = styled.div`
  display: grid;
  gap: 12px;
`;

export const ToggleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  background: #f8fafc;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ToggleTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const ToggleText = styled.p`
  margin-top: 4px;
  font-size: 0.86rem;
  line-height: 1.5;
  color: ${theme.colors.muted};
`;

export const TogglePill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 92px;
  min-height: 32px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(30, 107, 214, 0.08);
  color: ${theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GhostButton = styled.button`
  min-height: 42px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  background: #ffffff;
  color: ${theme.colors.text};
  font-size: 0.92rem;
  font-weight: 600;
`;

export const PrimaryButton = styled.button`
  min-height: 42px;
  padding: 0 16px;
  border-radius: 12px;
  border: none;
  background: ${theme.colors.primary};
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 700;
  box-shadow: 0 10px 20px rgba(30, 107, 214, 0.16);
`;