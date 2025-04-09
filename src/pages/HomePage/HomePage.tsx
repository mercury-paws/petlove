import PageName from "../../components/PageName/PageName";
import css from "./HomePage.module.css";
import { pageNames } from "../../constants/constants";

export default function HomePage() {
    return (
      <>
        <div>
          <PageName name={pageNames[6]} />
          <p>Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.</p>
      </div>
      <div>
         <img />
      </div>
    </>
  );
}