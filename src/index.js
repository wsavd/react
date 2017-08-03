import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Article from './Article';
import {articles} from './fixtures'


ReactDOM.render(<Article article = {articles[0]} />, document.getElementById('root'));
registerServiceWorker();
