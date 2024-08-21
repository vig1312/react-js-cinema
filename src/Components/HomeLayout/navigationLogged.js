import { NavLink } from 'react-router-dom';

import { navDataLogged } from '../../Data/constants';

function NavigationLogged() {
  return (
    <nav>
      <ul>
        {navDataLogged.map(({ path, title }, index) => (
          <NavLink to={path} key={index} className="nav-links">
            {title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationLogged;
