import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px ${({ theme }) => `${theme.colors.border}33`};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus,
  &:focus-within {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}33`}; /* %20 opacity */
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const NameEmail = styled.div`
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;

  & > * {
    white-space: break-spaces;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  display: flex;
  flex-direction: column;

  span:first-child {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryText};
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 0.875rem;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;

  label {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }

  span {
    color: ${({ theme }) => theme.colors.primaryText};
    font-weight: 500;
  }
`;
