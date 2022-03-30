import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import Memory from './components/Memory';

ReactDOM.render(
    <Fragment>
        <div className='container'>
            <div>
                <h1>Calculadora</h1>
                <Calculator />
            </div>
            <Memory />
        </div>
    </Fragment>
, document.getElementById('root'));