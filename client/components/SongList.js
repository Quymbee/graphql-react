import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

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
    return (
      <>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </>
    );
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
