import React, { useState, useEffect } from 'react';

const PracticalExperience = () => {
	const [companyName, setCompanyName] = useState('');
	const [position, setPosition] = useState('');
	const [role, setRole] = useState('');
	const [date, setDate] = useState('');
	const [edit, setEdit] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		setEdit(!edit);
	};

	const formEle = <form >
		<label className="form-label">Company name</label><br />
		<input
			className="form-control"
			type="text"
			value={companyName}
			name="companyName"
			onChange={(e) => setCompanyName(e.target.value)}
		/><br />
		<label className="form-label">Position title</label><br />
		<input
			className="form-control"
			type="text"
			value={position}
			name="position"
			onChange={(e) => setPosition(e.target.value)}
		/><br />
		<label className="form-label">role</label><br />
		<input
			className="form-control"
			type="text"
			value={role}
			name="role"
			onChange={(e) => setRole(e.target.value)}
		/><br />
		<label className="form-label">Date from</label><br />
		<input
			className="form-control"
			type="date"
			value={date}
			name="date"
			onChange={(e) => setDate(e.target.value)}
		/><br />
	</form>;

	const displayResults = <div>
		<p> name: {companyName}</p>
		<p> position: {position}</p>
		<p> role: {role}</p>
		<p> date from when you work for the Company: {date}</p>
	</div>;
	const btnEle = <button className="btn btn-primary" onClick={handleSubmit}>{edit ? "Submit" : "Edit"}</button>;

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
	)
}

export default PracticalExperience;