import styled from "styled-components";
import Header from "../ui/Header";
import AccountOptions from "./AccountOption";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

function HomePage() {
  return (
    <Container>
      <Header />
      <AccountOptions />
    </Container>
  );
}

export default HomePage;
