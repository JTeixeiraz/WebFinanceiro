import { useState } from 'react';
import './header.css';
import { AiFillFire } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineAlignRight } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

function Header(){
    const [aberto, setAberto] = useState(false);

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
                        <button className='btnlist'>
                            Depositar
                            <FiChevronUp />
                        </button>
                    </li>
                    <li>
                        <button className='btnlist'>
                            Despesas
                            <FiChevronDown />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;