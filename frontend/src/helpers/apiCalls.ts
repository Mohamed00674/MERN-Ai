import axios from "axios"

const Login = async (email: string, password: string) => {
    const response = await axios.post("/user/",{email,password})
}