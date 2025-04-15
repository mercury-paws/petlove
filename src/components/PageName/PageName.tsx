import css from './PageName.module.css'

type Props = {
    name: string;
    style?: React.CSSProperties;
    className?: string;
}

export default function PageName({ name, style, className }: Props) {
    return (
        <div className={"custom-page-name"}>{ name }</div>
    )
}