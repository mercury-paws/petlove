import css from './Menu.module.css';
import { buttonAuthNames } from '../../../constants/constants';
import { NavLink } from 'react-router-dom';

export default function Auth() {
    return (
        <div className="flex flex-row gap-[10px] flex-wrap">
            {buttonAuthNames.map(([name, to, className]) => (
                <div key={to}>
                    <NavLink to={to} className={`custom-link ${className}`}>
                        {name}
                    </NavLink>
                </div>
                
            ))}
        </div>
    )
}