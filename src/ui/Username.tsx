import styled from "styled-components";

interface UsernameProps {
  name: string;
}

const Name = styled.span`
  font-size: var(--font-size-md);
  color: var(--color-grey-800);
`;

const Username: React.FC<UsernameProps> = ({ name }) => {
  return <Name>{name || "Anonymous"}</Name>;
};

export default Username;
