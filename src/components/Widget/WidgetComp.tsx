import { Widget_Props } from "../Widget/type";
import UserWidget from "./UserWidget";
import ChartWidget from "./ChartWidget";
import NewsWidget from "./NewsWidget";

const WidgetComp = (props: Widget_Props) => {
  return(
    <div className="bg-white shadow w-fit rounded-lg p-4 m-2 flex items-center">
      {
        props.type === 'user' ? <UserWidget /> : null
      }
      {
        props.type === 'chart' ? <ChartWidget /> : null
      }
      {
        props.type === 'news' ? <NewsWidget /> : null
      }
    </div>
  )  
};

export default WidgetComp;
