import React from 'react';
import ReactDOM from 'react-dom';
import HomeScreen from './screens/HomeScreen';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

document.title = 'React + Bootstrap';

ReactDOM.render(
    <HomeScreen />,
    document.getElementById('root')
)
