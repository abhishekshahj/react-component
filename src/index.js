import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from "material-ui";

const Wrapper = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
