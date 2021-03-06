import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Properties from './components/Properties';

ReactDOM.render(<Properties />, document.getElementById('root'));

serviceWorker.unregister();
