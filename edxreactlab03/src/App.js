import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputArea from './components/input';
import ListArea from './components/output';






//<DisplayRow items={props.tableItems}/>

////////////////////////////////////////////////////////////////////////////////
//main()
//
//
class App extends React.Component {
  constructor(props) {
    super(props);
    /// declare all states here
    // testing purposes

    this.state = {
      items: [
        {
          firstname: "john",
          lastname: "doe",
          activity: "ac-ti-vi-ty",
          restrictions: "a"
        },
        {
          firstname: "jane",
          lastname: "doe",
          activity: "activ-ity",
          restrictions: "ab"
        }
      ],
      tmpFirstName: "",
      tmpLastName: "",
      tmpActivity: "Science Lab",
      tmpSelectionA: true,
      tmpSelectionB: false,
      tmpSelectionC: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
     this.removeItem = this.removeItem.bind(this);
  }

  handleClick = () => {
    console.log("add line item");
    console.log(
      "[" +
        this.state.tmpFirstName +
        "][" +
        this.state.tmpLastName +
        "][" +
        this.state.tmpActivity +
        "][" +
        this.state.tmpSelectionA +"|"+this.state.tmpSelectionB+"|"+ this.state.tmpSelectionC+
        "]");
    // restrictions parsing::
    var restrictions = '';
    if (this.state.tmpSelectionA == true) {
      restrictions = restrictions +'a';
    }
    if (this.state.tmpSelectionB == true) {
      restrictions = restrictions +'b';
    }
    if (this.state.tmpSelectionC == true) {
      restrictions = restrictions +'c';
    }
    
    
    this.setState({items:[...this.state.items, {
      firstname: this.state.tmpFirstName,
          lastname:this.state.tmpLastName,
          activity: this.state.tmpActivity,
          restrictions: restrictions},
                         ],
                   tmpFirstName:'',
                   tmpLastName:'',
                   tmpActivity:''
    })
    
    this.setState({tmpFirstName:'',tmpLastName:'',tmpActivity:''})
    console.log("xxxxx"+this.state.tmpFirstName)
                   
   

    
    
    console.log("NEW ::")
  console.log(this.state.items)
  console.log(this.state)
    
    
  };
removeItem =(e) =>{
  console.log("remove item--")
  console.log('remove item '+ e.target.name)
  var index =e.target.name
  var itemsCopy = this.state.items.slice()
  console.log(itemsCopy)
  itemsCopy.splice(index,1);

  this.setState({items:itemsCopy})
  console.log(itemsCopy)
  
}


  handleChange = e => {
    console.log(
      "changed happen on " +
        e.target +
        "||" +
        e.target.type +
        "|[" +
        e.target.name +
        "]-=>" +
        e.target.value +"or"+e.target.checked
    );
this.setState({
      [e.target.name]: e.target.value
    });
 
    if (e.target.name == "tmpActivity") {
      this.setState({ tmpActivity: e.target.value });
    }
    if (e.target.type == "checkbox") {
      console.log(e.target.name+" checked " + e.target.checked)
      const value = e.target.checked;
      this.setState({ [e.target.name]: e.target.checked });
      console.log("["+this.state.tmpSelectionA +"|"+this.state.tmpSelectionB+"|"+ this.state.tmpSelectionC+"]")
    }
    
     };

  render() {
    return (
      <div id="app">
        Lab03
        <InputArea
          addLine={this.handleClick}
          firstName={this.state.tmpFirstName}
          lastName={this.state.tmpLastName}
          handleChange={this.handleChange}
          misc={this.state}
        />
        <ListArea tableItems={this.state.items} removeItem={this.removeItem}/>
      </div>
    );
  }

}

//ReactDOM.render(<App />, document.getElementById("root"));




/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/
export default App;
