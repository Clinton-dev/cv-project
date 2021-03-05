import React, { useState, useEffect } from 'react';

const EducationExperience = () => {
	const [school, setSchool] = useState('');
	const [study, setStudy] = useState('');
	const [dateOfStudy, setdateOfStudy] = useState('');
	const [edit, setEdit] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		setEdit(!edit);

	};

	const formEle = <form >
		<label className="form-label">Name of school</label><br />
		<input
			className="form-control"
			type="text"
			value={school}
			name="school"
			onChange={(e) => setSchool(e.target.value)}
		/><br />
		<label className="form-label">Area of study</label><br />
		<input
			className="form-control"
			type="text"
			value={study}
			name="study"
			onChange={(e) => setStudy(e.target.value)}
		/><br />
		<label className="form-label">Date of study</label><br />
		<input
			className="form-control"
			type="date"
			value={dateOfStudy}
			name="dateOfStudy"
			onChange={(e) => setdateOfStudy(e.target.value)}
		/><br />
	</form>;

	const displayResults = <div>
		<p> name of school: {school}</p>
		<p> area of study: {study}</p>
		<p> date of study: {dateOfStudy}</p>
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


export default EducationExperience;