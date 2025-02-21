import { useState } from 'react';
import './header.css';
import { AiFillFire } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineAlignRight } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function Header(){
    const [aberto, setAberto] = useState(false);

    const navigate = useNavigate();

    function verAdicionar(){
        navigate("/Adicionar")
    }

    function verGastos(){
        navigate("/Gastos")
    }

    function Click(){
        setAberto(!aberto);
    }
    return(
        <>
            <header>
                <AiFillFire id='logo'/>
                <AiOutlineAlignRight id='list' onClick={Click}/>
            </header>
            <div className= {aberto ? 'aberto' : 'fechado'}>
                <ul>
                    <li>
                        <button className='btnlist' onClick={verAdicionar}>
                            Depositar
                            <FiChevronUp />
                        </button>
                    </li>
                    <li>
                        <button className='btnlist' onClick={verGastos}>
                            Despesas
                            <FiChevronDown />
                        </button>
                    </li>
                </ul>
                <FiArrowRight id='x' onClick={Click}/>
            </div>
        </>
    )
}

export default Header;