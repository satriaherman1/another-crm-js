import PluginTask from "@src/components/plugin/task";
import { Provider } from "@src/utility/hooks/context";
import reducer from "@src/utility/hooks/context/reducer";
import { useMemo, useReducer } from "react";

import AppRouter from "./app-router";
function App() {
  const [store, dispatch] = useReducer(reducer, { pluginModal: false, modal: false });
  const contextValue = useMemo(() => ({ store, dispatch }), [store, dispatch]);
  return (
    <Provider value={contextValue}>
      <AppRouter />
      <PluginTask />
    </Provider>
  );
}
export default App;
