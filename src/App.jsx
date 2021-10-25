
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';


function App() {
  const user = useSelector((state) => state.user.user)

  React.useEffect(() => {

  }, [user])
  return (
    <Switch>


      <Route exact path="/">
        {user ? <Home /> : <Redirect to="/register" />}
      </Route>
      <Route path="/register">
        {!user ? <Register /> : <Redirect to="/" />}
      </Route>
      <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
      {user ?
        <>
          <Route path='/watch' exact component={Watch} />

          <Route path='/movies'>
            <Home type='movies' />
          </Route>

          <Route path='/series'>
            <Home type='series' />
          </Route>

        </>
        :
        <Redirect to='/login' />
      }

    </Switch >
  );
}

export default App;
