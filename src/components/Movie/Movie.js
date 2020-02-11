import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
export class Movie extends React.Component {
    constructor() {
        super()
        // State initialization
        this.state = {
            clicks: 0,
            loading: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState((state => {
                return {
                    ...state,
                    loading: false,
                }
            }))
        }, 3000)
    }

    handleMovieClick() {
        this.setState((state) => {
            return {
                ...state,
                clicks: ++state.clicks
            }
        })
    }

    render() {
        // Object destructuring
        const {title, description, rating, poster_path, id } = this.props
        const { clicks, loading } = this.state
        var Component

        return (
            <div>
                <img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} style={{maxWidth: '100%'}}/>
                <h1 className="text-primary">{title}</h1>
                <p>Description: {description}</p>
                <p>Rating: {rating}</p>
                <p>Clicks: { clicks }</p>
                <Button color='primary' variant='contained'>
                    <Link to={`movie/${id}`}>Go to movie</Link>
                </Button>
            </div>
        )
    }
}
