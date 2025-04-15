import css from './AppBar.module.css';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Auth from './Auth/Auth';

export default function AppBar() {
    return (
        <div className="flex flex-wrap items-center justify-between flex-row gap-[10px]">
            <Logo />
            <Menu />
            <Auth />
        </div>
    )
}