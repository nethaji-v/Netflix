
import { Box, Button, Typography, IconButton, } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import styles from './Header.module.css';
import logo from '../../asset/logo.png';

const Header = () => {
    return (
        <>
            <Box className={styles["main-continer"]}>
                <Box className={styles["continer"]}>
                    <img src={logo} alt="Netflix Logo" className={styles['logo']} />
                    <Box className={styles['box-list']}>
                        <Button className={styles['button-style']}>Home</Button>
                        <Button className={styles['button-style']}  >TV Shows</Button>
                        <Button className={styles['button-style']}>Movies</Button>
                        <Button className={styles['button-style']}>New & Popular</Button>
                        <Button className={styles['button-style']}>My List</Button>
                        <Button className={styles['button-style']}>Browse by Languages</Button>

                    </Box>
                    < IconButton className={styles['IconButton-style']}>
                        <SearchIcon className={styles['SearchIcon-style']} />
                    </IconButton>
                    <Button className={styles['childern-style']}>Children</Button>
                    <IconButton className={styles['IconButtons-style']}>
                        <NotificationsIcon className={styles['SearchIcon-style']} />
                    </IconButton>
                    <IconButton className={styles['IconButtons-style']} >
                        <AccountCircle className={styles['SearchIcons-style']} />  <ArrowDropDownRoundedIcon className={styles['ArrowDropDownRoundedIcon-style']} />
                    </IconButton>
                </Box>
                <Box className={styles['bg-img']}
                    component="img"
                    src='https://occ-0-5559-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTmdFdNNC8gP9IXKrlwQkaHryp4_8coYI9ijxxSq469ANo0QQXyXgKvP3P9l7jijMGyiXPxAhm_YgF5E_eJF_O94IfkPxL4UtdCj.webp?r=c87'
                    alt="Background" 
                />
                <Box className={styles['overlay-img']}
                    component="img"
                    src=" https://occ-0-5559-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYLo-k7Yiq7yOiNE29swBBTc3zEy4oiA9gdPEvu7MYz8rbA5cWqot1akdNFvrr3MKeKF13iIEaoaMZMz0rLV4O11WOG_3nRzS58yjDXYwmn9CqB2VaabznQyVufy0bOArOpZ7t7pKUXLbSXamu2AaeaJGhCrLc7Zy0CJ1STevInJc1EeO7PO5Q.webp?r=4c6"
                    alt="Overlay"

                />
                <Typography className={styles['content']}>
                    Inspired by the Muzaffarpur shelter case, this unnerving crime drama follows a small-town reporter in a dogged fight for justice against powerful forces.
                </Typography>
                <Box sx={{ display: "flex" }}>
                    <Button className={styles['PlayArrowIcon']}>
                        <PlayArrowIcon/> play
                    </Button>
                    <Button className={styles['ErrorOutlineRoundedIcon']}>
                        <ErrorOutlineRoundedIcon/> More Info
                    </Button>
                </Box>

            </Box>
        </>
    )
}

export default Header