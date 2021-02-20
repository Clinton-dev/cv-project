import React from 'react';
// import './EducationalExprerince.css';

class EducationExperience extends React.Component {
  constructor(){
    super();
    this.state = {
    	school: "",
    	study: "",
    	dateOfStudy: "",
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
  		<label className="form-label">Name of school</label><br />
  		<input 
  			className="form-control"
  			type="text"
  			value={this.state.value}
  			name= "school"
  			onChange= {this.handleInput}
  		/><br />
  		<label className="form-label">Area of study</label><br />
  		<input 
  			className="form-control"
  			type="text"
  			value={this.state.value}
  			name= "study"
  			onChange= {this.handleInput}
  		/><br />
  		<label className="form-label">Date of study</label><br />
  		<input 
  			className="form-control"
  			type="date"
  			value={this.state.value}
  			name= "dateOfStudy"
  			onChange= {this.handleInput}
  		/><br />
  	</form>;

  	const displayResults = <div>
  		<p> name of school: {this.state.school}</p>
  		<p> area of study: {this.state.study}</p>
  		<p> date of study: {this.state.dateOfStudy}</p>
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

export default EducationExperience;