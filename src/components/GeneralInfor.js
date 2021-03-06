import React, { useState, useEffect } from 'react';
// import "../GeneralInfor.css";

const GeneralExperience = () => {
	const [ email, setEmail ] = useState('');
	const [ name, setName ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ edit, setEdit ] = useState(true);


	const handleSubmit = (e) => {
		e.preventDefault();
		setEdit(!edit);
	};

	const formEle = <form >

			<label className="form-label">Name</label>
			<input
				className="form-control"
				type="text"
				value={name}
				name="name"
				onChange={ (e) => setName(e.target.value)}
			/><br />
			<label className="form-label">email</label>
			<input
				className="form-control"
				type="email"
				value={email}
				name="email"
				onChange={(e) => setEmail(e.target.value)}
			/><br />
			<label className="form-label">Phone</label>
			<input
				className="form-control"
				type="phone"
				value={phone}
				name="phone"
				onChange={(e) => setPhone(e.target.value)}
			/><br />
		</form>;

	const displayResults = <div>
			<p> name: {name}</p>
			<p> email: { email}</p>
			<p> phone: { phone}</p>
		</div>;

	const btnEle = <button className="btn btn-primary" onClick={ handleSubmit}>{edit ? "Submit" : "Edit"}</button>;
	const res = edit ? formEle : displayResults;

	return (
		<div>
			<div class="card">
				<div class="card-body">
					{res}
					{btnEle}
				</div>
			</div>
		</div>
	);
};

export default GeneralExperience;