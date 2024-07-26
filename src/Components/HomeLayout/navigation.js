import {NavLink} from "react-router-dom";
import {navData} from "../../constants/constants";

function Navigation() {
    console.log(navData);
    return (
        <nav>
            <ul>
                {navData.map((item, index) => (
                    <NavLink className={"nav-links"} key={index} to={item.path}>{item.title}</NavLink>

                ))}
            </ul>
        </nav>
    )
}

export default Navigation;