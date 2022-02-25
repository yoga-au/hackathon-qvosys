import styled from "styled-components";
import Select from "react-select";

import { optionTPS, optionKel, optionKec } from "./constant";

const HeaderContainer = styled.div`
  padding: 1em 0;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 10%);
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderTitle = styled.div`
  margin-bottom: 1em;
  font-size: 0.875rem;
  font-weight: 600;
`;

const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5em;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <HeaderTitle>Pilih Lokasi</HeaderTitle>
        <SelectContainer>
          {/*  */}
          <Select
            isSearchable={false}
            options={optionKec}
            defaultValue={optionKec[0]}
          />
          {/*  */}
          <Select
            isSearchable={false}
            options={optionKel}
            defaultValue={optionKel[0]}
          />
          {/* TPS */}
          <Select
            isSearchable={false}
            options={optionTPS}
            defaultValue={optionTPS[0]}
          />
        </SelectContainer>
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;
