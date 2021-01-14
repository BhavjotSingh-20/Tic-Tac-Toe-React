import React from "react"
import {FaTimes, FaPen,FaRegCircle} from "react-icons/fa";
import "../App.css";
const Icon = ({name})  => {
    switch(name) {
        case 'circle' :
             return <FaRegCircle className="icons"/>

        case 'cross':
            return <FaTimes className="icons"/>

        default:
            return <FaPen classname="icons" />

    }
}
export default Icon;