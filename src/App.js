import './App.css';
import { NavigationRoutes } from './routes/Routes';
import { Navbar } from "./components/Navigation/NavBar"
import { Footer } from "./components/Footer/Footer"

function App() {
    return (
        <div className="App">
            <div className="section-one">
                <Navbar />
            </div>
            <div className="section-two">
                <NavigationRoutes />
            </div>
            <div className="section-three">
                <Footer />
            </div>
        </div>
    );
}

export default App;
