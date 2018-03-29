import React from 'react';
import ReactDOM from 'react-dom';




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
  export default ListArea; 
  