import { Box, Typography, ListItem, List, Button, Menu, MenuItem } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    const [dropDown, setDropDown] = useState(null);
    const open = Boolean(dropDown);

    const handleClick = (event) => {
        setDropDown(event.currentTarget);
    };

    const handleClose = () => {
        setDropDown(null);
    };
    return (
        <>
            <Box className={styles['Color']}>
                <Box>
                <Typography sx={{ color: 'grey', marginLeft: '11%', paddingTop: "65px",textTransform:"capitalize"}}>
                    Questions? Call <span style={{ textDecoration: 'underline' }}>000-800-919-1694</span>
                </Typography>
                <Box className={styles['box-styles']}>
                    <Box className={styles['box-list']}>
                        <List >
                            <ListItem>FAQ</ListItem>
                            <ListItem>Investor Relations</ListItem>
                            <ListItem>Privacy</ListItem>
                            <ListItem>Speed Test</ListItem>
                        </List>
                    </Box>
                    <Box className={styles['box-lists']}>
                        <List >
                            <ListItem>Help Center</ListItem>
                            <ListItem>Jobs</ListItem>
                            <ListItem>Cookie Perferences</ListItem>
                            <ListItem>Legal Notices</ListItem>
                        </List>
                    </Box>
                    <Box className={styles['box-lists']}>
                        <List >
                            <ListItem>Account</ListItem>
                            <ListItem>Ways To Watch</ListItem>
                            <ListItem> Corporate Information</ListItem>
                            <ListItem>
                                Only on Netflix</ListItem>
                        </List>
                    </Box>
                    <Box className={styles['box-lists']}>
                        <List >
                            <ListItem>
                                Media Centre</ListItem>
                            <ListItem>
                                Terms of Use</ListItem>
                            <ListItem>
                                Contact Us</ListItem>
                        </List>
                    </Box>
                </Box>
                <Box>
                    <Button
                        onClick={handleClick}
                        endIcon={<ExpandMoreIcon />}
                        className={styles["language-button"]}
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
                </Box>
                <Typography className={styles["typography-india"]}>Netflix India</Typography>
   
                </Box>
            </Box>

        </>
    )
}

export default Footer