import { AppBar, Toolbar } from "@mui/material"
import Logo from "./shared/logo.tsx"
function Header() {
  return (
    <div>
      <AppBar sx={{
        bgcolor: "transparent",
        position: "static",
        boxShadow : "none"
      }} >
        <Toolbar sx={{ display: "flex" }} >
          <Logo/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
