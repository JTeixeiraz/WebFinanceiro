import './header.css';
import { AiFillFire } from "react-icons/ai";
import { AiOutlineAlignRight } from "react-icons/ai";

function Header(){
    return(
        <header>
            <AiFillFire id='logo'/>
            <AiOutlineAlignRight id='list'/>
        </header>
    )
}

export default Header;