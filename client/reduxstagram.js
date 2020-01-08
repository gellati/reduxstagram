/*
  Import Dependencies
*/
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch, Redirect } from 'react-router'
import '@babel/polyfill'

/*
  Import Components
*/
import App from './components/App'

/* Import CSS */
// eslint-disable-next-line no-unused-vars
import css from './styles/style.styl'

/* Import our data store */
import store from './store'
import { BrowserRouter } from 'react-router-dom'

/*
  Error Logging
*/

// import Raven from 'raven-js';
// import { sentry_url } from './data/config';
// if(window) {
//   Raven.config(sentry_url).install();
// }


// https://stackoverflow.com/questions/34093913/how-to-debug-react-router
class DebugRouter extends Router {
  constructor(props){
    super(props)
    // eslint-disable-next-line no-console
    console.log('initial history is: ', JSON.stringify(this.history, null,2))
    this.history.listen((location, action)=>{
      // eslint-disable-next-line no-console
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      )
      // eslint-disable-next-line no-console
      console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null,2))
    })
  }
}



/*
  Rendering
  This is where we hook up the Store with our actual component and the router
*/
render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <BrowserRouter>
      <App>
        <DebugRouter>
          <Switch>
            <Route exact path="/" 
              component={App} 
            />
            <Redirect from='*' to='/' />
          </Switch>
        </DebugRouter>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
