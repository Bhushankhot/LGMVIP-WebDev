import Loader from "react-loader-spinner";
import "./styles.css";

const LoaderComp = () => {
  return (
    //used to display the loader when the api is fetching data
    <div className="app">
      <Loader
        type="Rings"
        animation="grow"
        color="rgb(139, 0, 139)"
        height={250}
        width={250}
        timeout={3000}
      />
    </div>
  );
};
export default LoaderComp;
