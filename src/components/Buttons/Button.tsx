import css from './Button.module.css';

type Props = {
    name: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
}

export default function Button({ name, ...rest }: Props) {
    return (
        <div>
            <button {...rest}>{ name }</button>
        </div>
    )
}