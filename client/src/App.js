import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import NewActivityForm from './components/NewActivityForm'
import ActivitiesList from './components/ActivitiesList'

function App() {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch('/activities')
      .then(res => res.json())
      .then(activitiesData => {
        setActivities(activitiesData)
      })
  }, [])

  return (
    <BrowserRouter>

      <div className="app">
        <Header />
        <NavBar />
        <Switch>
          <Route path="/form">
            <NewActivityForm />
          </Route>
          <Route path="/">
            <ActivitiesList activities={activities} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;