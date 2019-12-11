import React from 'react';
import {  AppRegistry } from 'react-360';
import {connect} from './store';
import IntroPage from './components/IntroPage';
import InfoPanel from './components/InfoPanel';


AppRegistry.registerComponent('InfoPanel', () => InfoPanel);

AppRegistry.registerComponent('IntroPage', () => IntroPage);

