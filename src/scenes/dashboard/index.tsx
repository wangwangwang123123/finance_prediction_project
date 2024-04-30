import { Box, useMediaQuery, useTheme } from '@mui/material'


type Props = {}

const girdTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
`

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const Dashboard = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1000px)");    
  

    return (
        <Box width="100%" height="100%" 
        display="grid"
        gap="1.5rem"
        sx={
            
            isAboveMediumScreens? 
            {
           
            gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: girdTemplateLargeScreens,
        }
        :{
            gridTemplateAreas: gridTemplateSmallScreens,

            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
             


        }
    
    }>
            <Box
                gridArea="a"
                bgcolor="#fff"
            >
            </Box>

            <Box
                gridArea="b"
                bgcolor="#ffff"
            >
            </Box>
            <Box
                gridArea="c"
                bgcolor="#ffff"
            >
            </Box>
            <Box
                gridArea="d"
                bgcolor="#ffff"
            >
            </Box>
            <Box
                gridArea="e"
                bgcolor="#ffff"
            >
            </Box>
            <Box
                gridArea="f"
                bgcolor="#ffff"
            >
            </Box>
            <Box
                gridArea="g"
                bgcolor="#ffff"
            >
            </Box>
            <Box
                gridArea="h"
                bgcolor="#ffff"
            >
            </Box>
            <Box
                gridArea="i"
                bgcolor="#ffff"
            >
            </Box>
            <Box
                gridArea="j"
                bgcolor="#ffff"
            >
            </Box>
        </Box>
    )
}

export default Dashboard 