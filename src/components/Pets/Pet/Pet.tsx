import Button from '../../Buttons/Button';
import css from './Pet.module.css'
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

type Props = {
    title: string;
    starNumber: string;
    name: string;
    birthday: string;
    sex: string;
    category?: string;
    species: string;
    about: string;
    price: string;
    contact?: boolean;
    style?: React.CSSProperties;
}

export default function Pet({title, starNumber,name, birthday, sex, species, about, price,category, contact = false}: Props) {
    return (
        <div>
            <img />
            <div>
                <p>{title}</p>
                <CiStar />
                <p>{starNumber}</p>
            </div>
            <div>
                <div>
                    <p>Name</p>
                    <p>{name}</p>
                </div>
                <div>
                    <p>Birthday</p>
                    <p>{birthday}</p>
                </div>
                <div>
                    <p>Sex</p>
                    <p>{ sex}</p>
                </div>
                <div>
                    <p>Species</p>
                    <p>{ species}</p>
                </div>
                {contact ?
                    (<div>
                    <p>Category</p>
                    <p>{ category }</p>
                </div>) :
                    null
                }
                
            </div>
            <p>{ about}</p>
            <p>{ price}</p>
            
            {contact ? (
                <div>
                    <Button name={"Learn More"} />
                    <CiHeart />
                </div>
            ) : (
                <div>
                    <Button name={"Add To"} />
                    <Button name={"Contact"} />
                </div>
            )}     
        </div>
    )
}