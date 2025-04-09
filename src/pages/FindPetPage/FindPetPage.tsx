import css from "./FindPetPage.module.css";
import { pageNames } from "../../constants/constants";
import PageName from "../../components/PageName/PageName";
import Search from "../../components/Search/Search";
import { filters } from "../../constants/constants";
import { filterSettings } from "../../constants/constants";
import Button from "../../components/Buttons/Button";
import PageList from "../../components/PageList/PageList";

export default function FindPetPage() {
    return (
      <>
        <PageName name={pageNames[2]} />
        <div>
          <div>
            <Search type={"text"} name={"search"} id={"search"} />
            <div>
              {Object.entries(filters).map(([key, value]) => (
                <Search type={"select"} name={key} id={key} key={key} options={value} />
              ))}
            </div>
            
            </div>
            <div>
                {filterSettings.map((filterBtn) => (
                <Button name={filterBtn} key={filterBtn} />
            ))}
          </div>
        </div>
            
        <div>
          <PageList />
        </div>
    </>
  );
}