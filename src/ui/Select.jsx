import styled from "styled-components";

const SelectWrapper = styled.select`
  padding: 10px;
  background: var(--color-white-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  width: 100%;
  font-size: var(--font-size-sm);
`;

const Option = styled.option`
  font-size: var(--font-size-sm);
`;

function Select({ children, ...props }) {
  return <SelectWrapper {...props}>{children}</SelectWrapper>;
}

function OptionComponent({ children, ...props }) {
  return <Option {...props}>{children}</Option>;
}

export { Select, OptionComponent as Option };
