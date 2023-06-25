import { ButtonComp } from "../UI";
import { Props } from "./types";

const TopBarComp = (props: Props) => {

  return (
    <nav className="fixed">
      <ul>
        <li>
          <ButtonComp type="primary">
            Options
          </ButtonComp>        
        </li>
      </ul>
    </nav>
  );
}

export default TopBarComp;