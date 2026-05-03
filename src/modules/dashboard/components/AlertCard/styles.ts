import styled from 'styled-components';

export const Container = styled.div<{ type: string }>`
  padding: 14px;
  border-radius: 14px;

  border: 1px solid rgba(15, 23, 42, 0.06);
  border-left: 5px solid
    ${({ type }) =>
      type === 'danger'
        ? '#EF4444'
        : type === 'warning'
        ? '#F59E0B'
        : '#10B981'};

  background: ${({ type }) =>
    type === 'danger'
      ? 'rgba(254, 226, 226, 0.75)'
      : type === 'warning'
      ? 'rgba(254, 243, 199, 0.75)'
      : 'rgba(220, 252, 231, 0.75)'};

  color: ${({ type }) =>
    type === 'danger'
      ? '#b91c1c'
      : type === 'warning'
      ? '#b45309'
      : '#166534'};

  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.04);
`;