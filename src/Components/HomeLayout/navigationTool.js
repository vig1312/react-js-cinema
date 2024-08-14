import { NavLink } from 'react-router-dom';

import { navData } from '../../Data/constants';

function Navigation() {
  return (
    <nav>
      <ul>
        {navData.map(({ path, title }, index) => (
          <NavLink to={path} key={index} className="nav-links">
            {title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
