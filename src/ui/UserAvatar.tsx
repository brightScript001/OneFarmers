import styled from "styled-components";

interface UserAvatarProps {
  src: string;
  alt: string;
  size?: string;
}

const Avatar = styled.img<UserAvatarProps>`
  border-radius: 50%;
  width: ${({ size }) => size || "40px"};
  height: ${({ size }) => size || "40px"};
  margin-right: 0.5rem;
`;

const UserAvatar: React.FC<UserAvatarProps> = ({ src, alt, size }) => {
  return <Avatar src={src} alt={alt} size={size} />;
};

export default UserAvatar;
