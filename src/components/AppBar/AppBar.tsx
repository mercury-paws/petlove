import css from './AppBar.module.css';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Auth from './Auth/Auth';

export default function AppBar() {
    return (
        <div className="flex rounded-tr-[60px] rounded-tl-[60px] pb-[32px] pt-[32px] min-h-[60px] flex-wrap items-center justify-between flex-row bg-(--orange) px-[64px] gap-y-4 ">
            <Logo />
            <Menu />
            <Auth />
        </div>
    )
}