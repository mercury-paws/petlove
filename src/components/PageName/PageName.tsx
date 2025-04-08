import css from './PageName.module.css'

type Props = {
    name: string;
}

export default function PageName({ name }) {
    return (
        <div>{ name }</div>
    )
}