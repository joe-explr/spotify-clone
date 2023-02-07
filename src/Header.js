import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useStateValue } from "./StateProvider"
import Avatar from '@mui/material/Avatar';
import './Header.css'

const Header = ({spotify}) => {
    const [{user},dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header