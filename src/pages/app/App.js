import Home from '../home'
import Detail from '../detail'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import List from '../meal list';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/detail/:id" element={<Detail/>}>
          </Route>
          <Route path="/list/:id" element={<List/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
