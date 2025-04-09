import css from './Menu.module.css';
import { buttonAuthNames } from '../../../constants/constants';
import { NavLink } from 'react-router-dom';

export default function Auth() {
    return (
        <div>
            {buttonAuthNames.map(([name, to]) => (
                <div key={to}>
                    <NavLink to={to}>
                        {name}
                    </NavLink>
                </div>
                
            ))}
        </div>
    )
}