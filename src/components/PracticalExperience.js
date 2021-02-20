import React from 'react';
// import "./PracticalExperience.css";

class PracticalExperience extends React.Component {
  constructor(){
    super();
    this.state = {
    	companyName: "",
    	position: "",
    	role: "",
    	date: "",
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
  		<label className="form-label">Company name</label><br />
  		<input 
  			className="form-control"
  			type="text"
  			value={this.state.value}
  			name= "companyName"
  			onChange= {this.handleInput}
  		/><br />
  		<label className="form-label">Position title</label><br />
  		<input 
  			className="form-control"
  			type="text"
  			value={this.state.value}
  			name= "position"
  			onChange= {this.handleInput}
  		/><br />
		<label className="form-label">role</label><br />
  		<input 
  			className="form-control"
  			type="text"
  			value={this.state.value}
  			name= "role"
  			onChange= {this.handleInput}
  		/><br />
  		<label className="form-label">Date from</label><br />
  		<input 
  			className="form-control"
  			type="date"
  			value={this.state.value}
  			name= "date"
  			onChange= {this.handleInput}
  		/><br />
  	</form>;

  	const displayResults = <div>
  		<p> name: {this.state.companyName}</p>
  		<p> position: {this.state.position}</p>
  		<p> role: {this.state.role}</p>
  		<p> date from when you work for the Company: {this.state.date}</p>
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

export default PracticalExperience;