import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import SongCreate from "./components/SongCreate";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/songs/new" component={SongCreate} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
