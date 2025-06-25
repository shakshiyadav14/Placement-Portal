import { StoreContext } from '../../../components/context/StoreContext'
import { useContext } from "react";
import FullDetail from './FullDetail';
function DisplayFullDetail() {

    const {studentDetails}=useContext(StoreContext);
  return (
    <FullDetail studentDetails={studentDetails}/>
  )
}

export default DisplayFullDetail