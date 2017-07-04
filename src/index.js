import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React Boilerplate with Semantic-UI';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
