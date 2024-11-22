import ClipLoader  from "react-spinners/ClipLoader";
import MoonLoader  from "react-spinners/MoonLoader";

const override = {
    display: "block",
    margin: "100px auto",
}
const Spinner = ({ loading }) => {
    return (
        < MoonLoader  
            color='#4338ca'
            loading={loading}
            cssOverride={override}
            size={80}
            margin={15}
      />
  )
}

export default Spinner