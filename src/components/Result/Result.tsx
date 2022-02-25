import styled from "styled-components";
import Capres1 from "../../assets/jokowi.png";
import Capres2 from "../../assets/prabowo.png";

const ResultContainer = styled.div`
  max-width: 1200px;
  margin: 3em auto 0;
`;

const ResultTitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3em;
`;

const ResultTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ResultSubtitle = styled.p`
  font-size: 0.875rem;
`;

const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const CapresImgContainer = styled.div`
  width: 300px;
  height: 200px;
  box-shadow: 3px 6px 18px rgba(0, 0, 0, 0.1);
`;

const CapresImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const NamaCapresContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2em;
  font-weight: 500;
`;

const JumlahSuaraContainer = styled.div`
  text-align: center;
  margin-top: 1em;
`;

const JumlahSuara = styled.p`
  font-size: 1.75rem;
  font-weight: 800;
`;

const Result = () => {
  return (
    <>
      <ResultContainer>
        <ResultTitleContainer>
          <ResultTitle>Hasil Pemilu di TPS 01</ResultTitle>
          <ResultSubtitle>
            Terakhir update pada 17:30:00 23 Februari 2024
          </ResultSubtitle>
        </ResultTitleContainer>
        <ChartContainer>
          {/* calon no.1 */}
          <div>
            <CapresImgContainer>
              <CapresImg src={Capres1} alt="Calon Presiden Nomor 1" />
            </CapresImgContainer>
            <NamaCapresContainer>
              <p>Joko Widodo</p>
              <p>Ma'ruf Amin</p>
            </NamaCapresContainer>
            <JumlahSuaraContainer>
              <JumlahSuara>9.737 Suara</JumlahSuara>
            </JumlahSuaraContainer>
          </div>
          {/* chart */}
          <div></div>
          {/* calon no.2 */}
          <div>
            <CapresImgContainer>
              <CapresImg src={Capres2} alt="Calon Presiden Nomor 2" />
            </CapresImgContainer>
            <NamaCapresContainer>
              <p>Prabowo Subianto</p>
              <p>Sandiaga Uno</p>
            </NamaCapresContainer>
            <JumlahSuaraContainer>
              <JumlahSuara>8.265 Suara</JumlahSuara>
            </JumlahSuaraContainer>
          </div>
        </ChartContainer>
      </ResultContainer>
    </>
  );
};

export default Result;
