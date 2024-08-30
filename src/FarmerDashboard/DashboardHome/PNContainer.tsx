import styled from "styled-components";
import PageTitle from "./PageTitle";
import { BellIcon } from "../../ui/Icons";

const Flex1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function SearchBarAndWelcomeUser() {
  return (
    <>
      <Flex1>
        <PageTitle />
        <img src={BellIcon} alt="notifications" />
      </Flex1>
    </>
  );
}

export default SearchBarAndWelcomeUser;
