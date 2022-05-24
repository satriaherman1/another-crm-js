import { useContext } from "react";
import { RootContext } from "@src/utility/hooks/context";
const useLocalData = () => useContext(RootContext);
export default useLocalData;
