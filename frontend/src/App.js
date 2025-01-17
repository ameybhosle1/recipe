import logo from './logo.svg';
import './App.css';
import { Switch , BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import OtherRecipes from './Components/OtherRecipes';
import Logout from './Components/Logout';
import ViewPost from './Components/ViewPost';
import AddRecipe from './Components/AddRecipe';


function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/view/:id" component={ViewPost} />
        <PrivateRoute exact path="/add-recipe" component={AddRecipe} />
        <PublicRoute exact path="/:profile/recipes" component={OtherRecipes} />
        <PrivateRoute exact path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
