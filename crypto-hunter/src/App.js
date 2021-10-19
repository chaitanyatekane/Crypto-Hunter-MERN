import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Coinpage from "./pages/Coinpage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={Coinpage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
