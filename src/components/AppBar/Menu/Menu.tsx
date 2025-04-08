import Button from '../../Buttons/Button';
import { buttonMenuNames } from '../../../constants/constants';
import css from './Menu.module.css';

export default function Menu() {
    return (
        <div>
            {buttonMenuNames.map((name) => (
                <Button key={name} name={name} />
            ))}
        </div>
    )
}