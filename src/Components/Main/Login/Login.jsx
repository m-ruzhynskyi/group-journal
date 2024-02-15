import {useState} from "react";
import LoginPage from "./LoginPage";
import {decryptText} from "../../../assets/data/cryptoUtilt";
import axios from "axios";
import {falseStatus, trueStatus} from "../../../redux/logiSlice";
import {useDispatch} from "react-redux";
export default function Login({setLoading, pageSet, setUser}){
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    function textEnter(e){setText(e.target.value)}
    function passwordEnter(e){setPassword(e.target.value)}
    function handleVerify(e){
        e.preventDefault();
        e.stopPropagation();
        verifying()
        dispatch(falseStatus())
    }
    function verifying() {
        axios.get('https://65c9232ea4fbc162e112a614.mockapi.io/test/myJournal')
            .then(res => {
                dispatch(trueStatus())
                if (Object.keys(res.data[0]).filter(key => key === text)[0]){
                    if (Boolean(res)) {
                        const decrypted = decryptText(res.data[0][text], '9857bc14-eb97-4fd4-9a40-34b073184545');
                        if(decrypted === password) {
                            pageSet('main')
                            setUser(text)
                        }
                    } else return false
                }
                setPassword('')
            })
    }

    return(
        <>
            <LoginPage passwordEnter={passwordEnter} textEnter={textEnter} password={password} text={text} handle={handleVerify}/>
        </>
    )
}