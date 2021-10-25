import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDrop from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { logout } from '../../store/auth/userActionCreators';

const Navbar = () => {
    const dispatch = useDispatch()




return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <img height={20} src="/img/logo.png" alt="" />
                <Link to='/' className='link'>
                    <span>Homepage</span>
                </Link>
                <Link to='/series' className='link'>
                    <span>Series</span>
                </Link>
                <Link to='/movies' className='link'>
                    <span>Movies</span>
                </Link>
                <span>New and popular</span>
                <span>My list</span>
            </div>
            <div className="right">
                <SearchIcon className='icon' />
                <span>KID</span>
                <NotificationsIcon className='icon' />
                <img src="/img/photo-1.jpeg" alt="" />
                <div className="profile">
                    <ArrowDrop className='icon' />
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={() => dispatch(logout())}>Logout</span>
                    </div>
                </div>

            </div>
        </div>

    </div>
)
}

export default Navbar
