import Contact from "./Pages/Contact/Contact";
import {Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home/Home";


function App() {
    return ( <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        </>
    );
}

export default App;