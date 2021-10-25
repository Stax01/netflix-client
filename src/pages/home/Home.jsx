
import React from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import { useDispatch, useSelector } from 'react-redux'
import './home.scss'
import { fetchListRandomRequest } from '../../store/list/listActionCreator'

const Home = ({ type }) => {
    const dispatch = useDispatch()
    const [genre, setGenre] = React.useState(null);
    const list = useSelector(state => state.list.list)

    React.useEffect(() => {
        dispatch(fetchListRandomRequest(type, genre))
    }, [dispatch,type, genre])


    return (
        <div className='home'>
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
    {list.map((list)=>  <List key={list._id} list={list} />)}
           

        </div>
    )
}

export default Home
