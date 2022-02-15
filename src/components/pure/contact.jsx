import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';


const ContactComponent = ({ contact, removeContact, connectionMode }) => {

	useEffect(() => {
		console.log('Contact created')
		return () => {
			console.log(`${contact.name} will be removed`)
		}
	}, [contact])

	const connection = () => {
		if(contact.connected){
			return (<i onClick={() => connectionMode(contact)} className='bi bi-toggle-on text-success contact-action'> Online</i>)
		} else {
			return (<i onClick={() => connectionMode(contact)} className='bi bi-toggle-off text-primary contact-action'> Offline</i>)
		}
	}

	return (
		<tr className='fw-normal'>
			<th className='p-2'>
				<span className='ms-2'>
				{ contact.name }
				</span>
			</th>
			<td className='align-middle p-2'>
				<span>
				{ contact.lastName }
				</span>
			</td>
			<td className='align-middle p-2'>
				<span>
				{ contact.email }
				</span>
			</td>
			<td className='align-middle p-2'>
				<span>
					{/* Function that returns a badge element works out */}
				{connection()}
				</span>
			</td>
			<td className='align-middle p-2'>
				<span>
					{/* Function that returns a badge element works out */}
					<i onClick={() => removeContact(contact)} className='bi-trash contact-action text-danger'></i>
				</span>
			</td>
		</tr>
	);
};


ContactComponent.propTypes = {
	contact: PropTypes.instanceOf(Contact),
	removeContact: PropTypes.func.isRequired,
	connectionMode: PropTypes.func.isRequired
};


export default ContactComponent;
