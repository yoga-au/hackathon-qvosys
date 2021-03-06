import { useContext } from "react";
import { TPSContext } from "../../context/tpsContext";
import styled from "styled-components";

const ListContainer = styled.div`
  max-width: 1200px;
  margin: 5em auto 0;
`;

const ListTitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3em;
  color: hsl(165, 33%, 30%);
`;

const ListTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
`;

const PemilihCard = styled(GridContainer)`
  row-gap: 1.25em;
  width: 500px;
  background-color: white;
  padding: 2em;
  border: 1px solid hsl(165, 33%, 50%);
  border-radius: 8px;
  box-shadow: 3px 6px 16px rgba(255, 255, 255, 0.16);
  margin-bottom: 4em;
`;

const List = () => {
  const { tps } = useContext(TPSContext);

  return (
    <>
      <ListContainer>
        <ListTitleContainer>
          <ListTitle>Daftar Pemilih di TPS 0{tps}</ListTitle>
        </ListTitleContainer>
        <GridContainer>
          <PemilihCard>
            <p>NIK</p>
            <p>210050426********</p>
            <p>Nama</p>
            <p>Beni Afrianto</p>
            <p>Tempat/Tanggal Lahir</p>
            <p>Jakarta, 26-04-1995</p>
          </PemilihCard>
          <PemilihCard>
            <p>NIK</p>
            <p>210050412********</p>
            <p>Nama</p>
            <p>Edi Habibi</p>
            <p>Tempat/Tanggal Lahir</p>
            <p>Jakarta, 12-08-1989</p>
          </PemilihCard>
          <PemilihCard>
            <p>NIK</p>
            <p>210050417********</p>
            <p>Nama</p>
            <p>Umar Nashiruddin</p>
            <p>Tempat/Tanggal Lahir</p>
            <p>Jakarta, 17-11-1992</p>
          </PemilihCard>
          <PemilihCard>
            <p>NIK</p>
            <p>210050403********</p>
            <p>Nama</p>
            <p>Farah Wulandari</p>
            <p>Tempat/Tanggal Lahir</p>
            <p>Jakarta, 03-12-1984</p>
          </PemilihCard>
          <PemilihCard>
            <p>NIK</p>
            <p>210050423********</p>
            <p>Nama</p>
            <p>Emong Waskita</p>
            <p>Tempat/Tanggal Lahir</p>
            <p>Jakarta, 23-02-1967</p>
          </PemilihCard>
          <PemilihCard>
            <p>NIK</p>
            <p>210050410********</p>
            <p>Nama</p>
            <p>Mila Hasanah</p>
            <p>Tempat/Tanggal Lahir</p>
            <p>Jakarta, 10-09-1995</p>
          </PemilihCard>
          <PemilihCard>
            <p>NIK</p>
            <p>210050412********</p>
            <p>Nama</p>
            <p>Lili Yuniar</p>
            <p>Tempat/Tanggal Lahir</p>
            <p>Jakarta, 12-12-1992</p>
          </PemilihCard>
          <PemilihCard>
            <p>NIK</p>
            <p>210050415********</p>
            <p>Nama</p>
            <p>Ilsa Andriani</p>
            <p>Tempat/Tanggal Lahir</p>
            <p>Jakarta, 15-07-1997</p>
          </PemilihCard>
          <PemilihCard>
            <p>NIK</p>
            <p>210050424********</p>
            <p>Nama</p>
            <p>Gasti Rahimah</p>
            <p>Tempat/Tanggal Lahir</p>
            <p>Jakarta, 24-05-1975</p>
          </PemilihCard>
          <PemilihCard>
            <p>NIK</p>
            <p>210050426********</p>
            <p>Nama</p>
            <p>Hadi Suwarno</p>
            <p>Tempat/Tanggal Lahir</p>
            <p>Jakarta, 26-04-1995</p>
          </PemilihCard>
        </GridContainer>
      </ListContainer>
    </>
  );
};

export default List;
