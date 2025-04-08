import css from './Button.module.css';

type Props = {
    name: string;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;

}

export default function Button({ name }: Props) {
    return (
        <div>
            <button>{ name }</button>
        </div>
    )
}