import styled from "styled-components";
import PNContainer from "./PNContainer";
import useMediaQuery from "../../utils/useMediaQuery";

const Content = styled.main`
  grid-area: mobile-header;
  padding: 2rem;
  margin-top: 4rem;
  overflow-y: auto;
`;

function ContentSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return <Content>{isMobile && <PNContainer />}</Content>;
}

export default ContentSection;
