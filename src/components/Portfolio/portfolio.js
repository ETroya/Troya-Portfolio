import React, {Component} from "react";

class Portfolio extends Component{
    constructor (props){
        super(props);
        this.state= {activeTab: 0}
    }
    render(){
        return(
            <div className ="category-tabs">
                {/* <Tabs activeTab={this.state.activeTab} onChange{(tabId)=> this.state({activeTab: tabId})}ripple>
<Tab></Tab>
                </Tabs> */}
            </div>
        )
    }
}
export default Portfolio;