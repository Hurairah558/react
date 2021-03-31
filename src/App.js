import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Route,Switch} from 'react-router-dom';
import Adm from './components/AdmissionForm';
import show from './components/ShowStudents';
import Header from './components/Header';
const App = () => {

    return (
      <React.Fragment>
          <Header/>
          <Switch>
              <Route exact path="/admissionform" component={Adm}/>
              <Route exact path="/show" component={show}/>
          </Switch>
      </React.Fragment>
    );
};

export default App;
