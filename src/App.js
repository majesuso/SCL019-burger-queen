import './App.css';
import ViewTakeOrders from './views/ViewTakeOrders';
import Kitchen from './components/kitchen/Kitchen';
import ViewNotFound from './views/View404';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ViewTakeOrders />} />
        <Route path="kitchen" element={<Kitchen />} />
        <Route path="*" element={<ViewNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
