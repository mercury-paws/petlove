import { buttonMenuNames } from '../../../constants/constants';
import css from './Menu.module.css';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <div>
            {buttonMenuNames.map(([name, to]) => (
                <div key={to}>
                    <NavLink to={to} className={"custom-link"}>
                        {name}
                    </NavLink>
                </div>
                
            ))}
        </div>
    )
}