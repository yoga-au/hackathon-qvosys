import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import List from "./components/List/List";
import TPSProvider from "./context/tpsContext";

function App() {
  return (
    <>
      <TPSProvider>
        <Header />
        <Result />
        <List />
      </TPSProvider>
    </>
  );
}

export default App;
