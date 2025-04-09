import css from './Pets.module.css';
import Pet from './Pet/Pet';


export default function Pets({myPet}) {
    return (
        <div>
            <Pet myPet={myPet} />
        </div>
    )
}