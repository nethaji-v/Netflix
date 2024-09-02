

import { Box, Card, CardContent, CardMedia, Typography, TextField, Button, Menu, MenuItem, IconButton } from '@mui/material';
import React, { useState, useRef } from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import faqData from "../../data.json";
import data from '../../data.json';
import styles from './Content.module.css';

const Content = () => {
    const [dropDown, setDropDown] = useState(null);
    const open = Boolean(dropDown);

    const handleClick = (event) => {
        setDropDown(event.currentTarget);
    };

    const handleClose = () => {
        setDropDown(null);
    };

    const boxRef = useRef(null);

    const handleScrollLeft = () => {
        if (boxRef.current) {
            boxRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (boxRef.current) {
            boxRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <>
            <Box className={styles['Color']} >

                <Box className={styles["Trending-Now"]}>Trending Now</Box>
                <Box sx={{ display: 'flex' }}>
                    <Box>
                        <Button
                            onClick={handleClick}
                            endIcon={<ExpandMoreIcon />}
                            className={styles['language-button']}
                        >
                            India
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={dropDown}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>India</MenuItem>
                            <MenuItem onClick={handleClose}>Global</MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Button
                            onClick={handleClick}
                            endIcon={<ExpandMoreIcon />}
                            className={styles['language-button']}
                        >
                            Movies

                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={dropDown}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Movies</MenuItem>
                            <MenuItem onClick={handleClose}>TV Shows</MenuItem>
                        </Menu>
                    </Box>
                </Box>
                <Box className={styles['main-Card']} ref={boxRef} >  
                    <IconButton className={styles['scroll-button-left']} onClick={handleScrollLeft}>
                        <ChevronLeftIcon fontSize="large"/>
                    </IconButton>
                    <Card className={styles['card']}>
                        <CardMedia
                            component="img"
                            image="https://occ-0-5559-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABQ4EfF5TRIjDfgG6Sc7odd8NNTKTnT57H7YBwbifMzAXZ1Hi9cZ9q5cotsGaroP9ZUXGob25WzGK-eASX6lF-Il2rdxYdaUEE6R-WkzcZpqibGHBHpGEVppU7jArhfoRfeX3PoWKawcFAa08dYD8TgJ5I18K7VPnuaMSEEbHxROehYIRkTVueq1NQOse7tKGTtwMJuw403CQ_7ioiC1uXuh7utNSZh2OaBYTCG7jePf4Jvq0cLxFcqi46pv_rXuVLbyYwqLNonsiG008oo_SsxTf6--gDOQ7whC1mfL02igltDtUA7KZ5FYUJq3NBewyZ39ldtdNuk5xNQJR62XBLNb0rSPjiKl7v3GX9L0RpmT62y_z934.webp?r=ead"
                            alt="Image description"

                        />


                    </Card>
                    <Card className={styles['card']}>
                        <CardMedia
                            component="img"
                            image='https://occ-0-5559-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABaKxz6AlzerittssXQzQOoY28XDWMzKItpTFYmRr7zwdETFNdjJTq07cnHuyq2wXlJXuYF4-831EoXv7_ljk37eB-KwX45gmItk7ggPR3CN3TqK9KrSMciiX_9MvepvycSxIP-wCIsy-wSpYii9axp28pISNWD-Mbfku11dLpfuq7cP9egyG_zYHe7dc0OLfjLLTVxwy74B3h13On0PMmMIbxULMvO5-XXDpt1h_eXEWjFgY32-Rkes0Qjm0AB7KdAZJOAUCIkM4BUyrGX5e2rnmCY6sPSMwu0jcPHW5-I28f559iLfKrRh6j6TZhbRFFYV0u6VmaUWXVjoPRUrPPIo.webp?r=8c7)'
                            alt="Image description"
                        />
                    </Card>

                    <Card className={styles['card']}>


                        <CardMedia
                            component="img"
                            image='https://occ-0-5559-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVnVseCf50-R1462JDaQKvq54J2uOHs-Y936s_nzZTaDMHFsu1gkCuoTmpuVY7sNvUqLdVo709K1CHK9xd4SjwZdZBgodUJ1P5EV1Pze2GjtqjGYvZm2-1e4WXaAXePoSZ4oLPNiXnUx2hx2Wcs9hZ8_9mriWzOQyEE.webp?r=a57)"'
                            alt="Image description"
                        />
                    </Card>
                    <Card className={styles['card']}>


                        <CardMedia
                            component="img"
                            image='https://occ-0-5559-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABdMWb1uHQB1jbhP-_Qi97BRAKx6Ec4ttRCkk9Axjb3Q2yhYI5V1fZZQlHmpUwl5k4Du7vz4g9hLZMLlIA9qur3LaNP7bTCC_UehSQnA46USjc2MONmH2CXp4m4SQmWkEEeVlp8IGhZC95a-MYAHPFXgt06Ta4mxySMP1Vb1bH8K9js0QsemMOUX7DGlRegnwTTPWeecUPiw5r5LKc8Gl5Kw0XkZRAiQRijBmk0xko67FUOZgbXWcSnPO48IzTV7tqmDqaowqVY03haJEIqwZYqDZo4KD.webp?r=3de)"'
                            alt="Image description"
                        />
                    </Card>
                    <Card className={styles['card']}>


                        <CardMedia
                            component="img"
                            image='https://occ-0-5559-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABa7a3AAQLd_WpeSg55jY4BA-i8TkPjRxsu8rRU6A9NERZjksylBBDih5D9yIKIihvoE2U-ttmcFa2Jw7EdwjfP3ivxlYNb0xqPaIxC9VbCxh9MsQkaKo3YlTZ05_oF31J4CTd-LostYJ79L-nHnmJZVlFWFG4VsXNnnRNd-JyxVzOClndpbegGnDGzP85bNSSf8om0DSi-8x7QfmS7cscfg2-VBlqWaQJH8f6u5D2yffjTWx3OlU_VECuFLE4go63_-ZvpgomGdthh9YUbxTCRxpOC3y5yEJzW0gukK9JhsB3LVf-d2hJMcIwr7TaWC4q9QE_QXj_ur23pi0q8tuS2LruAHnlYekO4-X63i_czHPsOl8AGo.webp?r=787)"'
                            alt="Image description"
                        />
                    </Card>
                    <Card className={styles['card']}>


                        <CardMedia
                            component="img"
                            image='https://occ-0-5559-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABcKDZcX_vxop6PC5ZoY_Q3VGfzkGEL01LodrZcC9l6OejfEzYgSrxCoE2lHxCHqnMbmkUbt4p8LM67j1jX2U5Iv2TGDHQE2pyKB5Co6I-sSoSPh8mvoEXnyOIHkOC30IFcQXyTtA02joullMPrtFL8Vs6eDlkCz8g_opTF6C_h4BdyR4gY7mb96s3a_T2paW9xJ1z7ggUI65ROiDAM9m8MXhAnz95VRP63nihWB4gIb-qVKXDVJzygVyeSGH-XxpfvUTnWkXXmc2AGQc_xcFDV1cj25Q.webp?r=508)'
                            alt="Image description"
                        />
                    </Card>
                    <Card className={styles['card']}>


                        <CardMedia
                            component="img"
                            image='https://occ-0-5559-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABag9UXygHsibLNcAecm20jHAWQ-P1On3x3qr81siEshtSTe_AZvJGdPQ2D2W1Lxr1oNk5OR4JivclfaI5xI7KSzQaRwmegtPF20ILfYUWze_dIILzX2vmmAPzb4X-wVY5iM1.webp?r=a0a)"'
                            alt="Image description"
                        />
                    </Card>
                    <Card className={styles['card']}>


                        <CardMedia
                            component="img"
                            image='https://occ-0-5559-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABdwbTxvOIeptVG9aC9GfuwHHSC3Gr8_ctQ35OwrVMl6izlm96V15-XmxQlDrKyW9V6o-5SCVhDxQSKTJ6Nzn__ml_9wHYTRftMk.webp?r=26c)"'
                            alt="Image description"
                        />
                    </Card>
                    <Card className={styles['card']}>


                        <CardMedia
                            component="img"
                            image='https://occ-0-5559-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTjRIXxilabCPtEKJ3CldqjTJ5xemFbO2Hw8NF16SD9eFuwJ-X0Ct3D0Rhq0Gi4tb3_WezNNT8R0joS1RAKoOJdhBcqH_wf5giE.webp?r=be5)"'
                            alt="Image description"
                        />
                    </Card>
                    <Card className={styles['card']}>

                        <CardMedia
                            component="img"
                            image='https://occ-0-5559-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABV2j-enrLYchHDPFFhK5c1AMYxzGvg-HShtb9Yhp1u2eGBhm3ompZQjo5TvwLeP82e924CSCMle6JbdyNZfyG_xAcDWrbJThqpQLEySqw5Fa-ElRUzI7kOQ1eJq-xfcnA-BC6RaOpNhzVXk9-Ksu43RQngGos9LcXOv9H1zdpMb0bC4RgnH-izg_YuKO8gdc7-KugC7HBAwVn44lJckWKhookOGIaRWU3kpAiL5Ag5ZgDDrAarVtOI95tTo8b8mOSm3bQ_hP1onu4uNmhtDrFl9-FpbzC1xC4cblYUjao7unjWCnUq4Ghb6i.webp?r=5da)"'
                            alt="Image description"
                        />
                    </Card>
                    <IconButton className={styles['scroll-button-right']} onClick={handleScrollRight}>
                        <ChevronRightIcon fontSize="large" />
                    </IconButton>


                </Box>
                <Typography className={styles['typography-custom']}>
                    More reasons to join
                </Typography>

                <Box className={styles['box-custom']}>
                    {data.reasons_to_join.data.map((item, index) => (
                        <Card className={styles['card-custom']}
                            key={index}

                        >
                            <CardContent>
                                <Typography fontSize='24px'>{item.name}</Typography>
                                <Typography variant="body2" marginTop="13%">{item.description}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box >
                <Box sx={{ width: "82%", marginLeft: "8.5% ", }}>
                    <Typography className={styles["Frequently"]}>Frequently Asked Questions
                    </Typography>
                    {faqData.faq.map((item, index) => (
                        <Accordion key={index}>

                            <AccordionSummary
                                expandIcon={<AddTwoToneIcon sx={{ color: 'white', fontSize: '50px' }} />}
                                className={styles['accordion-summary-customs']}
                            >

                                <Typography className={styles['typography-faq-custom']}>{item.question} </Typography>

                            </AccordionSummary>
                            <AccordionDetails className={styles['accordion-details-custom']}>
                                <Typography className={styles['typography-ans-custom']}>{item.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

                <Typography className={styles['typography-Ready']}>Ready to watch? Enter your email to create or restart your membership.
                </Typography>

                <Box className={styles["form-container"]}>
                    <TextField className={styles["text-field"]} type='email' variant="outlined" placeholder='Email address' />
                    <Button className={styles["get-started-button"]}>
                        Get Started {<KeyboardArrowRightIcon />}
                    </Button>
                </Box>

            </Box>
        </>
    );
}

export default Content

