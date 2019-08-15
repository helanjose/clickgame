import React,{Component} from "react";
import "./style.css";
import clicks from "../../../src/clicks.json"
const arr=[];
var scoreval=0;
class FriendCard extends Component{
 state={
   clicks,
   score:0,
   
 }
  clicked=(id)=>{
    
   
    //const notclicked = this.state.clicks.filter(cartoon => cartoon.id !== id);
    //console.log(notclicked);
    //const clickedcartoon=this.state.clicks.filter(cartoon => cartoon.id === id);
   if (arr.length ==0){
     arr.push(id);
     scoreval+=1;
   }
   
   else{

   
   const isInArray=arr.includes(id);

    if (isInArray==false)
   
       {
     scoreval=scoreval+1;
      arr.push(id);
     }
     else {
      scoreval=0;
     
     }
   this.setState({score:scoreval});
   this.props.updatescore(scoreval);

  }
  
  // this.setState({score})
  //console.log("arr"+arr);
    console.log("score"+ scoreval);

    
} 

   
  render(){

  
  return (
  <div className="row">
    <div className="col md12">
    
    <div className="card">
      <div className="img-container" >
        <img src={this.props.image} />
        
      </div>
      <span onClick={() => this.clicked(this.props.id)} className="clickme">
        Click me
      </span>
      </div>  
    </div>
    </div>
  );
 
}

}
export default FriendCard;
