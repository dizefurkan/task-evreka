import type { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 3rem 1rem;
  background-color: ${({ theme }) => theme.colors.surface || "#fff"};
  text-align: center;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.secondaryText || "#666"};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }) => theme.colors.border || "#ccc"};
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primaryText || "#333"};
`;

const Description = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.secondaryText || "#666"};
`;

export const Children = styled.div`
  margin-top: 1rem;
`;

type EmptyStateProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "empty" | "no-results";
} & PropsWithChildren;

const EmptyState: React.FC<EmptyStateProps> = (props) => {
  const { title, description, icon } = props;

  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Children>{props.children}</Children>
    </Wrapper>
  );
};

export default EmptyState;
