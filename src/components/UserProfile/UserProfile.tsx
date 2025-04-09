import css from './EditUserProfile.module.css';
import Button from '../Buttons/Button';
import PageName from '../PageName/PageName';
import { pageNames } from '../../constants/constants';
import { GoPlus } from "react-icons/go";
import Pets from '../Pets/Pets';


export default function UserProfile() {
    return (
        <div>
            <div>
                <p>some user component</p>
                <Button name="pencil" />
            </div>
            <img src="" alt="" />
                    <div>
                <PageName name={pageNames[8]} />
                <p>Name</p>
                <p>email</p>
                <p>phone</p>
            </div>
            
            <div>
                <PageName name={pageNames[9]} />
                <div>
                    <Button name="Add pet" />
                    <GoPlus />
                </div>
            </div>
            <div>
                <Pets myPet={true} />
            </div>
        
               </div>
           )
       }