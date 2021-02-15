import React from 'react';
// import "./GeneralInfor.css";

class GeneralExperience extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "john",
      email: "",
      phone: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [ name ]: value });
  }

  render() {
    console.log(this.state.name);
    return(
      <div>
        <label><strong>General Information</strong></label><br />
        <label>Name: </label><br/>
          <input
            type="text"
            placeholder="Name"
            name="name"
            
            onChange={this.handleInput}
          /><br />
        <label>Email: </label><br/>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={this.handleInput}
          /><br />
          <label>Phone no: </label><br/>
          <input
            type="tel"
            placeholder="phone number"
            name="phone"
            onChange={this.handleInput}
          /><br /><br />
      </div>
    )
  }
}

export default GeneralExperience;