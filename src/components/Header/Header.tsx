import { useContext } from "react";
import styled from "styled-components";
import Select from "react-select";
import { TPSContext } from "../../context/tpsContext";

import { optionTPS, optionKel, optionKec } from "./constant";

const HeaderContainer = styled.div`
  padding: 1em 0;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 10%);
  z-index: 2;
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

const SelectTitle = styled.p`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const Header = () => {
  const { setSelectedTPS } = useContext(TPSContext);

  return (
    <HeaderContainer>
      <ContentContainer>
        <HeaderTitle>Pilih Lokasi</HeaderTitle>
        <SelectContainer>
          <div>
            <SelectTitle>Kecamatan</SelectTitle>
            <Select
              isSearchable={false}
              options={optionKec}
              defaultValue={optionKec[0]}
            />
          </div>
          <div>
            <SelectTitle>Kelurahan</SelectTitle>
            <Select
              isSearchable={false}
              options={optionKel}
              defaultValue={optionKel[0]}
            />
          </div>
          {/* TPS */}
          <div>
            <SelectTitle>TPS</SelectTitle>
            <Select
              isSearchable={false}
              options={optionTPS}
              defaultValue={optionTPS[0]}
              onChange={(val) => val && setSelectedTPS(val.value)}
            />
          </div>
        </SelectContainer>
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;
