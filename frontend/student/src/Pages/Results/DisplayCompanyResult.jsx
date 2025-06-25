import CompanyResult from "./CompanyResult"
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";

const DisplayCompanyResult = () => {
    const {result} = useContext(StoreContext);
    return ( 
        <CompanyResult result={result} />
    );
}

export default DisplayCompanyResult;