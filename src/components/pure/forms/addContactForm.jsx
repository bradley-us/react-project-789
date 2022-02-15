import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/Contact.class.js';

const Addcontactform = ({addContactNow}) => {

	const nameRef = useRef('');
	const lastNameRef = useRef('');
	const emailRef = useRef('');

	function addContact(e){
		e.preventDefault();
		const addContact = new Contact(
			nameRef.current.value,
			lastNameRef.current.value,
			emailRef.current.value,
			false
		);
		addContactNow(addContact);
	}

	return (
		<form onSubmit={addContact}>
		<h4 className='py-3'>Add contact/s</h4>
			<div className="row g-3 px-3">
				<div className="col-6">
					<input ref={nameRef} type="text" className="form-control" placeholder="First name" aria-label="First name" autoFocus required />
				</div>
				<div className="col-6">
					<input ref={lastNameRef} type="text" className="form-control" placeholder="Last name" aria-label="Last name" required />
				</div>
			</div>
			<div className="col-12 my-2  px-3">
				<input ref={emailRef} type="email" className="form-control" placeholder="Email" aria-label="Last name" required />
			</div>
			<div className="col-12 my-2">
				<button type='submit' className='btn btn-primary'>Add Contact</button>
			</div>
		</form>
	);
}

Addcontactform.propTypes = {
	addContactNow: PropTypes.func.isRequired
}

export default Addcontactform;
