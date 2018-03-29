import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const InputName = props => {
  console.log("------->" + props.firstName);
  return (
    <div>
      {" "}
      <h1>Input Field goes here</h1>
      <h3>First Name </h3>
      <input
        type="text"
        name="tmpFirstName"
       
        value={props.firstName}
        onChange={props.onChange}
        
      />
      <h3>Last Name </h3>
      <input
        type="text"
        name="tmpLastName"
        
        onChange={props.onChange}
        value={props.lastName}
      />
      <br />
    </div>
  );
  //InputName.propTypes={
  //  firstName: PropTypes.string.isRequired
 // }
};

const SelectActivity = props => {
  return (
    <div>
      Select Activivty<br />
      <select name="tmpActivity" onChange={props.onChange}>
        <option value="scienceLab">Science Lab</option>
        <option value="swimming">Swimming</option>
        <option value="cooking">Cooking</option>
        <option value="painting">Painting</option>
      </select>
      <br />
    </div>
  );
};

const CheckBoxes = props => {
  return (
    <div>
      Check all that apply<br />
      <input
        type="checkbox"
        name="tmpSelectionA"
        checked={props.checkboxes.tmpSelectionA}
        onChange={props.onChange}
      />a) Dietary Restrictions <br />
      <input
        type="checkbox"
        name="tmpSelectionB"
        checked={props.checkboxes.tmpSelectionB}
        onChange={props.onChange}
      />b) Physical Disabilities <br />
      <input
        type="checkbox"
        name="tmpSelectionC"
        checked={props.checkboxes.tmpSelectionC}
        onChange={props.onChange}
      />c) Medical Needs<br />
    </div>
  );
};

const InputArea = props => {
  return (
    <div>
      <InputName
        firstName={props.firstName}
        lastName={props.lastName}
        onChange={props.handleChange}
      />
      <SelectActivity onChange={props.handleChange} />
      <CheckBoxes onChange={props.handleChange} checkboxes={props.misc} />
      <button onClick={props.addLine}>Submit</button>
    </div>
  );
};

function PostButton(props) {
  var style = {
    width: 100,
    height: 24
  };
  return <button style={style} onClick={props.removeItem} name={props.idx}>{props.label} </button>;
}

function PostText(props) {
  var style = {
    border: "1px solid black",
    width: 100,
    textAlign: "center"
  };
  return <div style={style}>{props.text}</div>;
}
/*
    <tr>
      <th>Remove</th>      
      <th>FirstName</th>      
      <th>LastName</th>
      <th>Activity</th>
      <th>Restrictions</th>
    </tr> */

const DisplayRow = props => {
  var style = { display: "flex" };
  return (
    <div style={style}>
      <PostButton label='x' removeItem={props.removeItem} idx={props.idx}/>
      <PostText text={props.line.firstname} />
      <PostText text={props.line.lastname} />
      <PostText text={props.line.activity} />
      <PostText text={props.line.restrictions} />
    </div>
  );
};

const ListArea = props => {
  var style = { display: "flex" };

  var rows = props.tableItems.map((item, index) => {
    return (
      <div>
        <DisplayRow key={index} line={item} removeItem={props.removeItem} idx={index}/>{" "}
      </div>
    );
  });
  console.log(rows);

  return (
    <div>
      <h1> Output List goes here </h1>

      <div style={style}>
        <PostText text="Remove" />
        <PostText text="First Name" />
        <PostText text="Last Name" />
        <PostText text="Activity" />
        <PostText text="Restrictions" />
      </div>
      {rows}
    </div>
  );
};

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
