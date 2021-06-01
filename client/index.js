import React from "react";
import "./style/style.css";
import ReactDOM from "react-dom";
import { Route, HashRouter, Switch } from "react-router-dom";
import history from "./history";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter history={history}>
        <>
          <Switch>
            <Route exact path="/" exact component={App} />
            <Route exact path="/songs/new" component={SongCreate} />
            <Route exact path="/songs/:id" component={SongDetail} />
          </Switch>
        </>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
