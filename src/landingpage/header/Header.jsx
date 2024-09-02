
import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TranslateIcon from '@mui/icons-material/Translate';
import logo from '../../asset/logo.png';
import line from '../../asset/line.png';
import styles from './Header.module.css';

const Header = () => {
    const [dropDown, setDropDown] = useState(null);
    const open = Boolean(dropDown);

    const handleClick = (event) => {
        setDropDown(event.currentTarget);
    };

    const handleClose = () => {
        setDropDown(null);
    };

    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('sign');
    };


    return (
        <Box className={styles['container']}>
            <Box className={styles['headerstyle']}>
                <img src={logo} alt="Netflix Logo" className={styles['logo']} />
                <Button
                    onClick={handleClick}
                    endIcon={<ExpandMoreIcon />}
                    className={styles['language-button']}
                    startIcon={<TranslateIcon />}
                >
                    English
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={dropDown}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>English</MenuItem>
                    <MenuItem onClick={handleClose}>Hindi</MenuItem>
                </Menu>

                <Button className={styles['sign-in-button']} onClick={handleSignIn}>

                    Sign In
                </Button>
            </Box>
            <Box>
                <Box sx={{ marginTop: '7.5%' }}>
                    <Typography className={styles['main-title']}>Unlimited movies,TV </Typography>
                    <Typography className={styles['main-title']}>shows, and more</Typography>
                </Box>
                <Typography className={styles['subtitle']}>Starts at ₹149. Cancel anytime.</Typography>
                <Typography className={styles['description']}>Ready to watch? Enter your email to create or restart your membership.</Typography>
                <Box className={styles['form-container']}>
                    <TextField className={styles['text-field']} type='email' variant="outlined" placeholder='Email address' />
                    <Button className={styles["get-started-button"]}>
                        Get Started {<KeyboardArrowRightIcon />}
                    </Button>
                </Box>
            </Box>
            <Box sx={{ marginTop: "7%", maxWidth: "100%", width: "100%" }}>
                <img src={line} alt="img" style={{ width: "100%", height: "auto" }} />
            </Box>

        </Box>
    );
};

export default Header;
