import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: "" };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          songId: this.props.songId,
          content: this.state.content,
        },
      })
      .then(() => this.setState({ content: "" }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Lyric</label>
          <input
            value={this.state.content}
            onChange={(event) => this.setState({ content: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
