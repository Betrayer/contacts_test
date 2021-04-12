import { HashRouter as Router } from "react-router-dom";
import { useRouter } from "./router/Router";
// import "./App.css";

function App(props) {
  const routing = useRouter(props);

  return (
    <>
      <Router>{routing}</Router>
    </>
  );
}

export default App;
