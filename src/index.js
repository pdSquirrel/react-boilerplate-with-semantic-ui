import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const title = 'React Boilerplate with Semantic-UI';

class ExampleComponent extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton primary={true} label="Logga in" />
        </MuiThemeProvider>
      </div>
    )
  }
}

ReactDOM.render(
  <ExampleComponent />,
  document.getElementById('app')
);

module.hot.accept();
