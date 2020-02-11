import React from 'react';
// import { withRouter } from 'react-router';

class MovieSingle extends React.Component {
  constructor() {
    super()
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <p>This is the Movie Single View</p>
      </div>
    )
  }
}

export default MovieSingle
