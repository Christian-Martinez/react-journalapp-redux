import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { login } from '../actions/auth';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { firebase } from '../firebase/firebase-config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        //carga las notas
        //las acciones deben de hacer los trabajos mas pesados
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Wait...</h1>;
  }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path='/auth' component={AuthRouter} isAuthenticated={isLoggedIn} />

          <PrivateRoute exact path='/' component={JournalScreen} isAuthenticated={isLoggedIn} />

          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  );
};
