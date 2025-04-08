import css from "./FriendsPage.module.css";
import { pageNames } from "../../constants/constants";
import PageName from "../../components/PageName/PageName";
import Search from "../../components/Search/Search";
import Friends from "../../components/FriendsPageComponents/Friends";

export default function FriendsPage() {
    return (
      <>
        <PageName name={pageNames[1]} />
        <Search type={"text"} name={"search"} id={"search"} />
        <Friends />
    </>
  );
}