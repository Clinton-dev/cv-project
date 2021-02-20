import React from 'react';
// import "../GeneralInfor.css";

class GeneralExperience extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      edit: true
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [ name ]: value });
  }

  handleSubmit (e) {
  	//e.preventDefault;
  	this.setState( prevState => {
  		return {
  			edit: !prevState.edit
  		}
  	});

  }

  render() {
  	const formEle = <form >
  		<label>Name</label><br />
  		<input 
  			type="text"
  			value={this.state.value}
  			name= "name"
  			onChange= {this.handleInput}
  		/><br />
  		<label>email</label><br />
  		<input 
  			type="email"
  			value={this.state.value}
  			name= "email"
  			onChange= {this.handleInput}
  		/><br />
  		<label>Phone</label><br />
  		<input 
  			type="phone"
  			value={this.state.value}
  			name= "phone"
  			onChange= {this.handleInput}
  		/><br />
  	</form>;
  	const displayResults = <div>
  		<p> name: {this.state.name}</p>
  		<p> email: {this.state.email}</p>
  		<p> phone: {this.state.phone}</p>
  	</div>;
  	const btnEle = <button onClick={ this.handleSubmit }>{ this.state.edit? "Subimt" : "Edit" }</button>;
  	
  	const res = this.state.edit? formEle : displayResults;

    return(
    	
      <div>	
        { res }
        { btnEle }
      </div>
      
    )
  }
}

export default GeneralExperience;