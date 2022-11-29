import { useNavigate } from "react-router-dom";

function Button (props){
    return(
      <button className="on-navbar">
          {props.label} {props.variant}
        </button>
    );
  }
  export default Button;