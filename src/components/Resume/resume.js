import React, {Component} from "react";
import NewResume from "../../Assets/TroyaJr Edwin.Resume.pdf"
import style from "./style.css"

class Resume extends Component{
    render(){
        return(
            <div>
                {NewResume && (<iframe src ={NewResume} className="resume-container" title= "E.Troya Resume "/>)}
            </div>
        )
    }
}
export default Resume;