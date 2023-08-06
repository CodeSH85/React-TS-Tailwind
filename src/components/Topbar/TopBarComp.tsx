import { useRef, useEffect } from "react";
import { ButtonComp } from "../UI";
import { Props } from "./types";

const TopBarComp = (props: Props) => {

  const { currentModule } = props;

  return (
    // fixed
    <nav className="w-full sticky bg-slate-100">
      <ul className="flex p-2 justify-between">
        <li className="capitalize">{ currentModule }</li>
        <li>
          <button>Log out</button>
          {/* <ButtonComp type="primary"> */}
            {/* Options */}
          {/* </ButtonComp>   */}
        </li>
      </ul>
    </nav>
  );
}

export default TopBarComp;
