import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/logo.tsx";
import { useAuth } from "../Context/AuthContext.tsx";
import Navbar from "./shared/Navbar.tsx";

function Header() {
  const auth = useAuth();
  return (
    <div>
      <AppBar
        sx={{
          bgcolor: "transparent",
          position: "static",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex" }}>
          <Logo />
          <div>
            {auth?.isLoggedIn ? (
              <>
                <Navbar to="/chat" bg="#00fffc" textColor="black" text="Chat" />
                <Navbar
                  to="/"
                  bg="#51538f"
                  textColor="white"
                  text="Logout"
                  onClick={auth?.logout}
                />
              </>
            ) : (
              <>
                <Navbar to="/login" bg="#00fffc" textColor="black" text="Login" />
                <Navbar
                  to="/register"
                  bg="#51538f"
                  textColor="white"
                  text="Register"
                />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
