import css from './Menu.module.css';
import { buttonAuthNames } from '../../../constants/constants';
import Button from '../../Buttons/Button';

export default function Auth() {
    return (
        <div>
            {buttonAuthNames.map((name) => (
                <Button key={name} name={name} />
            ))}
        </div>
    )
}