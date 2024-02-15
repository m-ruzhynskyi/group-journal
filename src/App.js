import './App.css';
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {useSelector} from "react-redux";
export default function App() {
    const loader = useSelector (state => state.login.status)
    return (
        <>
            {!loader && <div className="loader"></div>}
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}







