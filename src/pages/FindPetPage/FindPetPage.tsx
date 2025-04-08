import css from "./NewsPage.module.css";
import { pageNames } from "../../constants/constants";
import PageName from "../../components/PageName/PageName";
import Search from "../../components/Search/Search";
import { filters } from "../../constants/constants";
import { filterSettings } from "../../constants/constants";
import Button from "../../components/Buttons/Button";
import PageList from "../../components/PageList/PageList";

export default function NewsPage() {
    return (
      <>
        <PageName name={pageNames[2]} />
        <div>
          <div>
            <Search type={"text"} name={"search"} id={"search"} />
            <div>
              {Object.entries(filters).map(([key, value]) => (
                <Search type={"select"} name={key} id={key} options={value} />
              ))}
            </div>
            
            </div>
            <div>
                {filterSettings.map((filterBtn) => (
                <Button name={filterBtn} />
            ))}
          </div>
        </div>
            
        <div>
          <PageList />
        </div>
    </>
  );
}