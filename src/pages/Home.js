import React, { useEffect } from 'react';
import { get } from '../util/api'
import AppLoader from '../components/General/AppLoader';
import AppLayout from '../components/General/AppLayout';
import { Movie } from '../components/Movie/Movie'
import { Grid } from '@material-ui/core'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: false,
      movies: []
    }
  }

  async getData() {
    this.setLoading(true)

    try {
      const res = await get('movie/popular')
      console.log(res)

      this.setState((state) => {
        return {
          ...state,
          movies: res.results,
        }
      });
    } catch(err) {
      console.log(err)
    } finally {
      this.setLoading(false)
    }
  }

  componentDidMount() {
    this.getData()
  }

  setLoading(loading) {
    this.setState((state) => {
      return {
        ...state,
        loading, // loading: loading
      }
    })
  }

  render() {
    const { loading, movies } = this.state
    return (
      <AppLayout>
        {
          loading ? <div className='col'><AppLoader /></div>: ""
        }
        <Grid container={true}>
        {
          movies.map((item) => (
            <Grid item xs={4}>
              <Movie
                title = {item.title}
                description = {item.overview}
                rating = {item.vote_average}
                poster_path = {item.poster_path}
                id = {item.id}
              />
            </Grid>
          ))
        }
        </Grid>
      </AppLayout>
    )
  }
}

export default Home;
