import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import './listItem.scss'
import { movieApi } from '../../api/movie';


const ListItem = ({ index, item }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [movie, setMovie] = React.useState({});

    React.useEffect(()=>{
        const getMovie = async () => {
            try {
             const data = await movieApi.getMovie(item)
              setMovie(data);
            } catch (err) {
              console.log(err);
            }
          };
          getMovie();
    },[item])
    
    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div className='listItem' style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={movie.img} alt="" />
            {isHovered &&
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">

                        <div className="icons">
                            <PlayArrowIcon className='icon' />
                            <AddIcon className='icon' />
                            <ThumbUpAltOutlinedIcon className='icon' />
                            <ThumbDownAltOutlinedIcon className='icon' />
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className='limit'>+16</span>
                            <span>+14999</span>
                        </div>
                        <div className="desc">{movie.desc}
                        </div>
                        <span className='genre'>Action</span>
                    </div>
                </>
            }
        </div>
    )
}

export default ListItem
