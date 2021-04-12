import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "./router/Router";
// import "./App.css";

function App(props) {
  const routing = useRouter(props);

  return (
    <>
      <Router basename="/contacts_test">{routing}</Router>
    </>
  );
}

export default App;
