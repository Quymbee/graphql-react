import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import fetchSongs from "../queries/fetchSongs";

class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({
        variables: { id },
      })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.loading ? (
      <div>Loading...</div>
    ) : (
      this.props.data.songs.map(({ id, title }) => {
        return (
          <li key={id} className="collection-item">
            {title}
            <i className="material-icons" onClick={() => this.onSongDelete(id)}>
              delete
            </i>
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

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongs)(SongList));
