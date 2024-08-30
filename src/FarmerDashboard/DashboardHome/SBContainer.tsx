import styled from "styled-components";
import SearchBar from "../../ui/SearchBar";
import useMediaQuery from "../../utils/useMediaQuery";

const SearchBarContainer = styled.div`
  grid-area: search-bar;
  display: flex;
  justify-content: center;
`;

function SBContainer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {isMobile && (
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
      )}
    </>
  );
}

export default SBContainer;
