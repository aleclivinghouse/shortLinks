import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';


import {routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

//the session will reset every time the name changes



// Stateless functional component


Meteor.startup(() => {
  Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById('app'));
});
