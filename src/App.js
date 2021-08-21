import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { Spinner } from "./components/Spinner";
import { useStateValue } from "./context/ContextProvider";
import { GlobalStyles } from "./styles/GlobalStyles";
const Home = lazy(() => import("./components/Home"));
const Principal = lazy(() => import("./components/Principal"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const NotFound = lazy(() => import("./components/NotFound"));
const Profile = lazy(() => import("./components/Profile"));
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <PrivateRoute exact path="/home" user={user} component={Home} />
            <PrivateRoute
              path="/profile/:username"
              user={user}
              component={Profile}
            />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
