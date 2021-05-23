import React from 'react';
import { Route, Switch } from 'react-router-dom';

import InterviewComment from './components/InterviewComment/InterviewComment';
import InterviewEnd from './components/InterviewEnd/InterviewEnd';
import InterviewRatingScale from './components/InterviewRatingScale/InterviewRatingScale';
import InterviewTitleList from './components/InterviewTitleList/InterviewTitleList';

import './App.css';

function App() {
  return (
  <Switch> 
   <Route exact path='/' component={InterviewTitleList}/>
   <Route path='/interviewRatingScale' component={InterviewRatingScale}/>
   <Route path='/interviewComment' component={InterviewComment}/> 
   <Route path='/interviewEnd' component={InterviewEnd}/>  
  </Switch>
  );
}

export default App; 
