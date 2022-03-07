import { useContext, useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { TPSContext } from "../../context/tpsContext";
import { voteData } from "./constant";
import Capres1 from "../../assets/jokowi.png";
import Capres2 from "../../assets/prabowo.png";

const ResultContainer = styled.div`
  max-width: 1200px;
  margin: 3em auto 0;
`;

const ResultTitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3em;
  color: hsl(165, 33%, 30%);
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
  color: hsl(165, 33%, 30%);
`;

const JumlahSuaraContainer = styled.div`
  text-align: center;
  margin-top: 1em;
  color: hsl(165, 33%, 30%);
`;

const JumlahSuara = styled.p`
  font-size: 1.75rem;
  font-weight: 800;
`;

const data = [
  { name: "Jokowi", value: 180 },
  { name: "Prabowo", value: 61 },
];

const COLORS = ["hsl(169, 38%, 50%)", "hsl(169, 38%, 30%)"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#EEF7FF"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontWeight="bold"
      fontSize="1.5rem"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

type DataObj = {
  name: string;
  value: number;
}[];

const Result = () => {
  const { tps } = useContext(TPSContext);
  const [displayedData, setDisplayedData] = useState<DataObj | undefined>(
    undefined
  );

  useEffect(() => {
    const findData = voteData.find((item) => item.id === tps);
    setDisplayedData(findData?.result);
  }, [tps]);

  return (
    <>
      <ResultContainer>
        <ResultTitleContainer>
          <ResultTitle>Hasil Pemilu di TPS 0{tps}</ResultTitle>
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
              <JumlahSuara>
                {displayedData &&
                  displayedData.find((item) => item.name === "Jokowi")
                    ?.value}{" "}
                Suara
              </JumlahSuara>
            </JumlahSuaraContainer>
          </div>
          {/* chart */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={displayedData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  );
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
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
              <JumlahSuara>
                {displayedData &&
                  displayedData.find((item) => item.name === "Prabowo")
                    ?.value}{" "}
                Suara
              </JumlahSuara>
            </JumlahSuaraContainer>
          </div>
        </ChartContainer>
      </ResultContainer>
    </>
  );
};

export default Result;
