import { NavLink } from 'react-router-dom';
import { navData } from '../../Data/constants';


function Navigation() {

    return (
        <nav>
            <ul>
                {navData.map(({path,title}, index) => (

                    <NavLink
                        className="nav-links"
                        key={index}
                        to={path}
                    >
                        {title}

                    </NavLink>

                ))}
            </ul>
        </nav>
    )
}

export default Navigation;