import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import animate from 'animate.css';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
registerServiceWorker();
ReactDOM.render(<App />, document.getElementById('root'));

