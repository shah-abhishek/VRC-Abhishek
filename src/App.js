// import logo from './logo.svg';
import './App.css';
import TDR from './components/TDR';
import Main from './components/Main';
import SubSystemAnalysis from './components/SubSystemAnalysis';
import SystemTrendAnalysis from './components/SystemTrendAnalysis';
import Unsheduled_Removals from './components/SystemTrendAnalysis/Unsheduled_Removals';
import Aircraft_Sub_Chart from './components/Aircraft_Sub_Chart';
function App() {
  return (
    <div className="App">
      {/* <TDR/> */}
      <Main/>
      {/* <SystemTrendAnalysis/>
      <SubSystemAnalysis/> */}
      <Aircraft_Sub_Chart/>
      {/* <Unsheduled_Removals/> */}
    </div>
  );
}

export default App;
