import { Routes, Route } from 'react-router-dom';
import MainView from "../components/MainView";
import TestView from "../components/test";

const AppRoutes = () => {
return (         
  <Routes>
    <Route path='/' element={<MainView/>} />
    <Route path='/test' element={<TestView/>} />
  </Routes>
);
}
export default AppRoutes;
