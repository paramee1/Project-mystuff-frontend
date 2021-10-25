import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
import routes from "./config/route";

function App() {
  const { user } = useContext(UserContext);
  const role = user?.role ? user.role : "guest";

  return (
    <div className="App">
      <Navbar />
      <Switch>
        {routes[role].route.map(item => (
          <Route key={item.path} exact={item.exact} path={item.path} component={item.component} />
        ))}
        <Redirect to={routes[role].redirect} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
