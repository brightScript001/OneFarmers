import styled from "styled-components";

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
`;

function UserAvatar({ src, alt }) {
  return <Avatar src={src} alt={alt} />;
}

export default UserAvatar;
