import React from 'react';
import ReactDOM from 'react-dom';




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
  export default InputArea;  