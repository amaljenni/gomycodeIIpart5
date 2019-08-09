import React from "react"
import myimage from "./sarra.jpg"
import myimage1 from "./mark.jpg"
import myimage2 from "./tonny.jpg"
import Btn from "./Btn"
export default class Link extends  React.Component{

constructor(props){
    super(props);
    this.state={
        Title:"sarra",
        src:myimage,
        Text:"I am an ingeneer"
    };
}
    render(){
        return(
        
        <>
        <Btn btnn={()=>{
            this.setState({Title:"sarra",src:myimage,Text:"I am an ingeneer"});
            }}
        label="sarra"/>,
        <Btn btnn={()=>{
            this.setState({Title:"mark",src:myimage1,Text:"I am a doctor"});
            }}
        label="mark"/>,
        <Btn btnn={()=>{
            this.setState({Title:"tonny",src:myimage2,Text:"I am a teatcher"});
            }}
        label="tonny"/>,        

        
        <h1>{this.state.Title}</h1>,
       <img src={this.state.src}/>,
        <p> {this.state.Text}</p>
        </>
        )
    }

}
