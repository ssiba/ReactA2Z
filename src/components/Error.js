import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err = useRouteError();
    // console.log(err);
    return(
        <div>
            <h1>OOPS !!!</h1>
            <p>Something Went </p>
            <h4>{err.status}:{err.statusText}</h4>
        </div>
    )
}
export default Error;
