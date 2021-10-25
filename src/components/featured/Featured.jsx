import React, { useEffect } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useDispatch, useSelector } from 'react-redux'
import './featured.scss'
import { fetchMovieRandomRequest } from '../../store/movie/movieActionCreator';

const Featured = ({ type, setGenre }) => {

    const movie = useSelector(state => state.movie.movie)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovieRandomRequest(type))
    }, [type, dispatch])
  
    return (
        <div className='featured'>
            <div className="category">
                <span>{type === 'series' ? "Series" : "Movies"}</span>
                <select name="genere"
                    id="genere"
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>

            </div>

            <img src={movie.img} alt="" />
            <div className="info">
                <img src={movie.imgTitle} alt="" />
                <span className='desc'>{movie.desc}</span>
                <div className="infoBtn">
                    <button className='play'>
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
