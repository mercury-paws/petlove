import PageName from '../PageName/PageName';
import { pageNames } from '../../constants/constants';
import { GoPlus } from "react-icons/go";
import Pets from '../Pets/Pets';
import css from './UserPrefs.module.css'
import Button from '../Buttons/Button';
import { filterUserPrefs } from '../../constants/constants';

export default function UserPrefs() {
    return (
        <div>
            <div>
                <Button type="submit" name={filterUserPrefs[0]} />
                <Button type="submit" name={filterUserPrefs[1]} />
            </div>
            
            <div>
                <Pets myPet={false} />
            </div>
            <Button name="Log Out" />
               </div>
           )
       }