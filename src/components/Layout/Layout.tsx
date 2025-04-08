import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css'

type Props = {
    children: React.ReactElement;
}

export default function Layout({ children }: Props) {
    return (
        <div>
            <AppBar />
            <div>{ children }</div>
        </div>
    )
}