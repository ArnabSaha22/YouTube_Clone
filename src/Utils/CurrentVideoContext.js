import { createContext } from "react";

//Context API to store the current video
const CurrentVideoContext = createContext({
    currentVideo : null
})

export default CurrentVideoContext;