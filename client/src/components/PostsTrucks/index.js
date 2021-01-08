import React, { useEffect } from "react";
import API from "../../utils/API";



function PostsTrucks() {

    const [state, setTrucks] = useStoreContext();
    //const [makeState, setMakeState] = useState("");
    // const [modelState, setModelState] = useState("");
    // const [locationState, setLocationState] = useState("");
    // const [rateState, setRateState] = useState("");
  
    const getTrucks = () => {
        setTrucks({ type: LOADING });
        API.getTrucks()
          .then(results => {
            setTrucks({
              type: UPDATE_POSTS,
              trucks: results.data
            });
          })
          .catch(err => console.log(err));
      };

      useEffect(() => {
        getTrucks();
      }, []);
}