

import {useState} from 'react'
import {Link} from "react-router-dom"
import {Box, Typography, useTheme} from "@mui/material"
import FlexBetween from '@/components/FlexBetween'
import LocalCafeIcon from '@mui/icons-material/LocalCafe';


type Props = {}

const Navbar = (props: Props) => {

    const { palette } = useTheme();  
    const [selected, setselected] = useState("dashboard")
  return (
    <FlexBetween
       mb="0.25rem"
       p="0.5rem 0rem"
       color={palette.grey[300]}
    >
        {/* left side */}
        <FlexBetween
         gap="0.75rem"
        >
            <LocalCafeIcon  sx={{fontSize: "28px"}}/>
            <Typography variant='h4' fontSize="16px"
            >
                Finance Predictions
            </Typography>
        </FlexBetween>


        {/* right side */}
        <FlexBetween gap="2rem">
            <Box sx={{"&:hover": { color: palette.primary[100]}}}></Box>
            <Box>
                <Link
                    to="/"
                    onClick={()=> setselected("dashboard")}
                    style={{
                        color: selected === "dashboard" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                    }}
                >
                dashboard
                </Link>
            </Box>


            <Box sx={{"&:hover": { color: palette.primary[100]}}}></Box>
            <Box>
                <Link
                    to="/predictions"
                    onClick={()=> setselected("predictions")}
                    style={{
                        color: selected === "predictions" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                    }}
                >
                predictions
                </Link>
            </Box>
        </FlexBetween>

    </FlexBetween>
  )
}

export default Navbar;