import {Palette , PaletteColor} from  "@mui/material/styles/createPalette"

//抓去调色板中的颜色
declare module  "@mui/material/styles/createPalette"
{
 interface PaletteColor
 {
    [key: number] : string;

 }

 interface Palette{
    tertiary: PaletteColor
 }

}