import css from './Menu.module.css';
import { buttonAuthNames } from '../../../constants/constants';
import { NavLink } from 'react-router-dom';

export default function Auth() {
    return (
        <div>
            {buttonAuthNames.map(([name, to]) => (
                <div key={to}>
                    <NavLink to={to} className={"custom-link"}>
                        {name}
                    </NavLink>
                </div>
                
            ))}
        </div>
    )
}