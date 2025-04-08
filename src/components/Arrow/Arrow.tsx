import css from './Arrow.module.css'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


type Props = {
    children: React.ReactElement;
}

export default function Arrow({ children }: Props) {
    return (
        <div>
            <MdOutlineKeyboardDoubleArrowLeft />
            <MdKeyboardArrowLeft />
            <div>{children}</div>
            <MdOutlineKeyboardArrowRight />
            <MdOutlineKeyboardDoubleArrowRight />
        </div>
    )
}