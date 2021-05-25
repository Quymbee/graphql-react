import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    return this.props.data.loading ? (
      <div>Loading...</div>
    ) : (
      this.props.data.songs.map((song) => {
        return (
          <li key={song.id} className="collection-item">
            {song.title}
          </li>
        );
      })
    );
  }

  render() {
    return <ul className="collection">{this.renderSongs()}</ul>;
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
