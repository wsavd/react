import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import ArticleList from './ArticleList';
import {articles} from './fixtures'


ReactDOM.render(<ArticleList articles = {articles} />, document.getElementById('root'));
registerServiceWorker();
