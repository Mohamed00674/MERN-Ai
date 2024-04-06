import { Link } from "react-router-dom";


type Props = {
  to: string,
  bg: string,
  text: string,
  textColor: string,
  onClick? : () => Promise<void>
}

function Navbar(props : Props ) {
  return (
    <Link to={props.to}  style={{backgroundColor : props.bg , color : props.textColor}} >{ props.text}</Link>
  )
}

export default Navbar;
