import React from 'react';
import { get } from '../util/api'
import AppHeader from '../components/General/AppHeader';
import AppLoader from '../components/General/AppLoader';
import { Container, Grid, Typography } from '@material-ui/core';
// import { withRouter } from 'react-router';

class MovieSingle extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: false,
      movie: null,
    }
  }

  setLoading(loading) {
    this.setState((state) => {
      return {
        ...state,
        loading, // loading: loading
      }
    })
  }

  async getData() {
    try {
      const movie_id = this.props.match.params.id

      const res = await get(`movie/${movie_id}`)

      this.setState((state) => {
        return {
          ...state,
          movie: res,
        }
      })
    } catch(err)  {
      console.log(err)
    } finally {
      this.setLoading(false)
    }
  }

  componentDidMount() {
    this.getData()
  }

  render () {
    const { loading, movie } = this.state
    return (
      <div className="MovieSingle">
        <AppHeader />
        {
          loading ? <div className='col'><AppLoader /></div>: ""
        }
        {
          !loading && movie &&
          <div className='MovieSingle--movie-content'>
            <Container>
              <Grid container direction={'row-reverse'}>
                <Grid md={4}>
                  <div className='MovieSingle--poster' style={{ textAlign: 'center'}}>
                    <img src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} style={{maxWidth: '100%' }}/>
                  </div>
                </Grid>
                <Grid md={8}>
                  <div className='MovieSingle--content'>
                      <Typography variant={'h4'}>{ movie.title }</Typography>
                      <br />
                      <p>{ movie.overview }</p>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        }
      </div>
    )
  }
}

export default MovieSingle
