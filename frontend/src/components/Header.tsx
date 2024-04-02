import { AppBar,Toolbar } from "@mui/material"
function Header() {
  return (
    <div>
      <AppBar sx={{
        bgcolor: "transparent",
        position: "static",
        boxShadow : "none"
      }} >
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
