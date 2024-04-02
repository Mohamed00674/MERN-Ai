import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function logo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "auto",
        gap: "8px",
      }}
    >
      <Link to={"/"}>
        <img
          src="../../../public/openai.png"
          alt="this is a logo"
          width={"30px"}
          height={"30px"}
          className="logo"
        />
        <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            mr: "auto",
            fontWeight: "800",
            textShadow: "2px 2px 20px #000 ",
          }}
        ></Typography>
      </Link>
    </div>
  );
}

export default logo;
