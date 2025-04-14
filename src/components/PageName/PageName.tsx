import css from './PageName.module.css'

type Props = {
    name: string;
    style?: React.CSSProperties;
}

export default function PageName({ name }: Props) {
    return (
        <div className={"custom-page-name"}>{ name }</div>
    )
}