import { useRef, useEffect } from "react";
import { ButtonComp } from "../UI";
import { Props } from "./types";

const TopBarComp = (props: Props) => {

  const { currentModule } = props;

  return (
    // fixed
    <nav className="w-full bg-slate-100">
      <ul className="flex p-2 justify-between">
        <li>{ currentModule }</li>
        <li>
          <button>test</button>
          {/* <ButtonComp type="primary"> */}
            {/* Options */}
          {/* </ButtonComp>   */}
        </li>
      </ul>
    </nav>
  );
}

export default TopBarComp;