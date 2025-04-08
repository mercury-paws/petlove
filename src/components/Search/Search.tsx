import css from './Search.module.css';
import { IoIosSearch } from "react-icons/io";

type Props = {
    type: 'text' | 'select' | "filter";
    options?: string[];
    name: string;
    id: string;
    style?: React.CSSProperties;
}

export default function Search({type, options, name, id}: Props) {
    return (
        <div>
            {type === 'select' ? (
                <select
                    name={name}
                    id={id}
                >
                    {options?.map((option) => (
                        <option key={option} value={option.toLowerCase()}>
                            {option}
                        </option>
                    ))}
                </select>
            ) :  (
                    <div>
                        <input
                            type='text'
                            name={name}
                            id={id}
                        />
                        <IoIosSearch />
                    </div>
                    
              
            )
        }
        </div>
    );
}