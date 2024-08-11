import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
    /* text-transform: uppercase; */
    font-weight: 100;
    text-align: center;
  `,
  medium: css`
    font-size: 0.875rem;
    padding: 0.7rem 1.4rem;
    font-weight: 300;
    white-space: nowrap;
  `,
  large: css`
    font-size: 1.2rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    white-space: nowrap;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-0);
    background-color: var(--color-green-700);

    &:hover {
      background-color: var(--color-green-800);
    }
  `,
  secondary: css`
    color: var(--color-green-700);
    background-color: var(--color-grey-200);
    border: 1px solid var(--color-green-300);

    &:hover {
      background-color: var(--color-grey-300);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: background-color 0.3s;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
