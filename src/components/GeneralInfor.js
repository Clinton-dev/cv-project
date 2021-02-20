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
  	e.preventDefault();
  	this.setState( prevState => {
  		return {
  			edit: !prevState.edit
  		}
  	});

  }

  render() {
  	const formEle = <form >

  		<label className="form-label">Name</label>
  		<input 
  			className="form-control"
  			type="text"
  			value={this.state.value}
  			name= "name"
  			onChange= {this.handleInput}
  		/><br />
  		<label className="form-label">email</label>
  		<input 
  			className="form-control"
  			type="email"
  			value={this.state.value}
  			name= "email"
  			onChange= {this.handleInput}
  		/><br />
  		<label className="form-label">Phone</label>
  		<input 
  			className="form-control"
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
  	const btnEle = <button className="btn btn-primary" onClick={ this.handleSubmit }>{ this.state.edit? "Submit" : "Edit" }</button>;
  	
  	const res = this.state.edit? formEle : displayResults;

    return(
    	
      <div>	
      	<div class="card">
  		  <div class="card-body">
  		  { res }
          { btnEle }
  		  </div>
		</div>
        
      </div>
      
    )
  }
}

export default GeneralExperience;