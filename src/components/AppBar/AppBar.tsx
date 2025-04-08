import css from './AppBar.module.css';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Auth from './Auth/Auth';

export default function AppBar() {
    return (
        <div>
            <Logo />
            <Menu />
            <Auth />
        </div>
    )
}