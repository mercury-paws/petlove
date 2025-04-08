import css from "./NewsPage.module.css";
import { pageNames } from "../../constants/constants";
import PageName from "../../components/PageName/PageName";
import Search from "../../components/Search/Search";
import News from "../../components/NewsPageComponents/News";
import PageList from "../../components/PageList/PageList";

export default function NewsPage() {
    return (
      <>
        <div><PageName name={pageNames[0]} />
        <Search type={"text"} name={"search"} id={"search"} />
      </div>
          
        <News />
        <div>
                  <PageList />
                </div>
    </>
  );
}