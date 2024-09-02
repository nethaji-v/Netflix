import { Box, Card, CardMedia, Typography, IconButton } from "@mui/material";
import styles from "./Movies.module.css";
import data from "../../../data.json";
import React, { useRef } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Movies = () => {
    const refs = {
        section1: useRef(null),
        section2: useRef(null),
        section3: useRef(null),
        section4: useRef(null),
        section5: useRef(null),
    };

    const handleScrollLeft = (section) => {
        if (refs[section].current) {
            refs[section].current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const handleScrollRight = (section) => {
        if (refs[section].current) {
            refs[section].current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <Box className={styles["bg-color"]}>
            <Box>
                <Typography className={styles['typography-title']}>
                    Because You Are Watching Major (Telugu)
                </Typography>
                <Box className={styles["movies-container"]} ref={refs.section1}>
                    <IconButton className={styles['scroll-button-left']} onClick={() => handleScrollLeft('section1')}>
                        <ChevronLeftIcon fontSize="large" />
                    </IconButton>

                    {data.movies.map((movie, index) => (
                        <Card key={index} className={styles["card"]}>
                            <CardMedia
                                component="img"
                                className={styles["card-media"]}
                                image={movie.url}
                                alt={`Movie ${index + 1}`}
                            />
                        </Card>
                    ))}
                    <IconButton className={styles['scroll-button-right']} onClick={() => handleScrollRight('section1')}>
                        <ChevronRightIcon fontSize="large" />
                    </IconButton>
                </Box>

                <Typography className={styles['typography-style']}>Binge-worthy Political TV Dramas</Typography>
                <Box className={styles["movies-container"]} ref={refs.section2}>
                    <IconButton className={styles['scroll-button-left']} onClick={() => handleScrollLeft('section2')}>
                        <ChevronLeftIcon fontSize="large" />
                    </IconButton>

                    {data.movies.map((movie, index) => (
                        <Card key={index} className={styles["card"]}>
                            <CardMedia
                                component="img"
                                className={styles["card-media"]}
                                image={movie.url}
                                alt={`Movie ${index + 1}`}
                            />
                        </Card>
                    ))}
                    <IconButton className={styles['scroll-button-right']} onClick={() => handleScrollRight('section2')}>
                        <ChevronRightIcon fontSize="large" />
                    </IconButton>
                </Box>

                <Typography className={styles['typography-style']}>South Indian Love Stories</Typography>
                <Box className={styles["movies-container"]} ref={refs.section3}>
                    <IconButton className={styles['scroll-button-left']} onClick={() => handleScrollLeft('section3')}>
                        <ChevronLeftIcon fontSize="large" />
                    </IconButton>

                    {data.movies.map((movie, index) => (
                        <Card key={index} className={styles["card"]}>
                            <CardMedia
                                component="img"
                                className={styles["card-media"]}
                                image={movie.url}
                                alt={`Movie ${index + 1}`}
                            />
                        </Card>
                    ))}
                    <IconButton className={styles['scroll-button-right']} onClick={() => handleScrollRight('section3')}>
                        <ChevronRightIcon fontSize="large" />
                    </IconButton>
                </Box>

                <Typography className={styles['typography-style']}>Indian Crime Movies</Typography>
                <Box className={styles["movies-container"]} ref={refs.section4}>
                    <IconButton className={styles['scroll-button-left']} onClick={() => handleScrollLeft('section4')}>
                        <ChevronLeftIcon fontSize="large" />
                    </IconButton>

                    {data.movies.map((movie, index) => (
                        <Card key={index} className={styles["card"]}>
                            <CardMedia
                                component="img"
                                className={styles["card-media"]}
                                image={movie.url}
                                alt={`Movie ${index + 1}`}
                            />
                        </Card>
                    ))}
                    <IconButton className={styles['scroll-button-right']} onClick={() => handleScrollRight('section4')}>
                        <ChevronRightIcon fontSize="large" />
                    </IconButton>
                </Box>

                <Typography className={styles['typography-style']}>Blockbuster Action Thrillers</Typography>
                <Box className={styles["movies-container"]} ref={refs.section5}>
                    <IconButton className={styles['scroll-button-left']} onClick={() => handleScrollLeft('section5')}>
                        <ChevronLeftIcon fontSize="large" />
                    </IconButton>

                    {data.movies.map((movie, index) => (
                        <Card key={index} className={styles["card"]}>
                            <CardMedia
                                component="img"
                                className={styles["card-media"]}
                                image={movie.url}
                                alt={`Movie ${index + 1}`}
                            />
                        </Card>
                    ))}
                    <IconButton className={styles['scroll-button-right']} onClick={() => handleScrollRight('section5')}>
                        <ChevronRightIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Movies;
