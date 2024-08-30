import styled from "styled-components";

const TextAreaWrapper = styled.textarea`
  background: var(--color-white-100);
  padding: 10px;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  width: 100%;
  height: 100px;
  resize: vertical;
  font-size: var(--font-size-sm);
`;

function TextArea({ placeholder, ...props }) {
  return <TextAreaWrapper placeholder={placeholder} {...props} />;
}

export default TextArea;
