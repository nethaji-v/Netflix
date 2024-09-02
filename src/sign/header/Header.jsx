
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import styles from "./Header.module.css"
import logo from '../../asset/logo.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/HomePage');
    };
     
    return (
        <>

            <Box className={styles['container']}>
                <Box className={styles['headerstyle']}>
                    <img src={logo} alt="Netflix Logo" className={styles['logo']} />
                </Box>
                <Box className={styles['border']}>
                    <Box>
                        <Typography className={styles["sign"]}>Sign In</Typography>
                        <TextField className={styles["text-field"]} type='email' placeholder='Email or mobile number' />
                        <TextField className={styles["text-field-password"]} type='password' placeholder='password' />
                        <Button className={styles["sign-in-button"]} onClick={handleSignIn}>
                            Sign In
                        </Button>
                        <Typography className={styles["typography-style"]}>OR</Typography>
                        <Button className={styles["sign-in-code-button"]} >
                            Use a sign-in-code
                        </Button>
                        <Typography className={styles['typography-style-forgat']}>Forgat password?</Typography>
                    </Box>
                    <FormGroup className={styles['formgroup-checkbox']}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={styles["formgroup-Checkbox"]}
                                    checked={checked}
                                    onChange={handleChange}

                                />
                            }
                            label="Remember me"
                        />
                    </FormGroup>
                    <Typography className={styles['typography-New-to-Netflix']}>New to Netflix? <span className={styles['span-sign']}>Sign up now.</span></Typography>
                    <Typography className={styles['typography-reCAPTCHA']}>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <span className={styles['span-Learn-more']}>Learn more.</span>
        </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Header 