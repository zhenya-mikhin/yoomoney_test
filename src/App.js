import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import MainPage from './components/pages/MainPage/MainPage'
import AddCard from './components/pages/AddCardPage/AddCardPage'
import SuccessPage from './components/pages/SuccessPage/SuccessPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <MainPage />
        </Route>
        <Route exact path={'/add'}>
          <AddCard />
        </Route>
        <Route exact path={'/success'}>
          <SuccessPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App