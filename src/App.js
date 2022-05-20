import './App.css';
import ViewTakeOrders from './views/ViewTakeOrders';
import Kitchen from './components/kitchen/Kitchen';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ViewTakeOrders />} />
        <Route path="kitchen" element={<Kitchen />} />
      </Routes>
    </div>
  );
}

export default App;
