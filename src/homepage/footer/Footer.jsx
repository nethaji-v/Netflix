
import styles from "./Footer.module.css"
import { Box, Button, IconButton, List, ListItem, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    return (
        <Box>
            <Box className={styles["bg-color"]}>
                <Box className={styles["social-media"]}>
                    <Box sx={{ color: "white" }}>
                        <IconButton className={styles["IconButton-styles"]}>
                            < FacebookIcon /> <InstagramIcon className={styles["InstagramIcon-styles"]} /> <TwitterIcon className={styles["InstagramIcon-styles"]} /> <YouTubeIcon className={styles["InstagramIcon-styles"]} />
                        </IconButton>
                    </Box>
                    <Box className={styles['box-styles']}>
                        <Box className={styles['box-list']}>
                            <List >
                                <ListItem> Audio Description</ListItem>
                                <ListItem>Investor Relations</ListItem>
                                <ListItem>Legal Notices</ListItem>
                            </List>
                        </Box>
                        <Box className={styles['box-lists']}>
                            <List >
                                <ListItem>Help Center</ListItem>
                                <ListItem>Jobs</ListItem>
                                <ListItem>Cookie Perferences</ListItem>
                            </List>
                        </Box>
                        <Box className={styles['box-lists']}>
                            <List >
                                <ListItem>Gift Cards</ListItem>
                                <ListItem>Terms of Use</ListItem>
                                <ListItem> Corporate Information</ListItem>

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

                </Box>
                <Button className={styles["Service-Code"]}>Service Code</Button>
                <Typography className={styles["netflix"]}>© 1997-2024 Netflix, Inc.</Typography>
            </Box>

        </Box>
    )
}

export default Footer