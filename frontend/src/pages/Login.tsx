import { Box, Button, Typography } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { FiLogIn } from "react-icons/fi";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-hot-toast";

function Login() {
  const auth = useAuth();
  const handleClick = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Logging In", { id: "Login" });
      await auth?.login(email, password);
      toast.success("Logged In successfully ", { id: "Login" });
    } catch (error) {
      console.log(error);
      toast.error("Logging failed");
    }
  };

  return (
    <Box width={"100%"} height={"100%"} display="flex" flex={1}>
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img
          src="airobot.png"
          alt="this is a rebot"
          style={{ width: "400px" }}
        />
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={"auto"}
        mt={16}
      >
        <form
          onSubmit={handleClick}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>
            <CustomizedInput name="email" label="Email" type="email" />
            <CustomizedInput type="password" label="Password" name="password" />
            <Button
              startIcon={<FiLogIn />}
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "430px",
                borderRadius: 2,
                bgcolor: "#00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
            >
              LOGIN
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
