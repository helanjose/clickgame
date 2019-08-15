import React,{Component} from 'react';
import clicks from "./clicks.json"
import Cards from "./components/Cards"
import Wrapper from "./components/Wrapper";

class App extends Component {
  
state={
  clicks,
  score:0
  
 
}
 updatescore=(newscore)=>{
console.log(newscore);
this.setState({score:newscore});
  
}


 render(){

  
    return(
<div>
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Clicky Game</h1>
    <h3 id="score">score:{this.state.score}</h3>
    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
<Wrapper>
{this.state.clicks.map(pic => (
          <Cards
            updatescore={this.updatescore}
            id={pic.id}
            key={pic.id}
            image={pic.image}
           
          />
        ))}
</Wrapper>
</div>
    );
}
}

export default App;
