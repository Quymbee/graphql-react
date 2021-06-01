import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import LyricCreate from "./LyricCreate";

export class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    return this.props.data.loading ? (
      <div>Loading...</div>
    ) : (
      <div className="container">
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate songId={this.props.match.params.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return { variables: { id: props.match.params.id } };
  },
})(SongDetail);
