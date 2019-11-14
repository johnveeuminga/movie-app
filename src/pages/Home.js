import React, { useEffect } from 'react';
import { get } from '../util/api'
import AppLoader from '../components/General/AppLoader';
import AppLayout from '../components/General/AppLayout';


class Home extends React.Component {
  componentDidMount() {
    get('movie/popular')
      .then((res) => {
        console.log('This is the result: ', res);
      })
  }

  render() {
    return (
      // <div className="App">
      //   <AppLoader />
      //   This is the home page.
      // </div>
      <AppLayout>
        <p>This is the home page</p>
      </AppLayout>
    )
  }
}

export default Home;
