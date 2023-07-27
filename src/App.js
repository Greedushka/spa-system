import Aside from './components/aside/aside'
import Header from './components/header/header'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Footer from "./components/footer/footer";
import Dashboard from "./pages/Dashboard/Dashboard"
import Tasks from './pages/Tasks/tasks'
import Settings from './pages/Settings/settings'
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/tasks' element={<Tasks />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
