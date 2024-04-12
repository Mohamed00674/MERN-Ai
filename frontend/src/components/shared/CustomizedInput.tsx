import { TextField } from "@mui/material";

type Props = {
  name: string;
  type: string;
  label: string;
};

function CustomizedInput(props: Props) {
  return (
    <div>
      <TextField
        margin="normal"
        InputLabelProps={{ style: { color: "white" } }}
        name={props.name}
        label={props.label}
        type={props.type}
        inputProps={{style: { color: "white" , width:"400px" , borderRadius:"10" , fontSize: 20  }  }}
      />
    </div>
  );
}

export default CustomizedInput;
