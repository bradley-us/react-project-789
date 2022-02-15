import React, { useState, useEffect } from 'react';
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/contact';
import Addcontactform from '../pure/forms/addContactForm';


const ContactListComponent = () => {

	// DATA FOR STATES
	const defaultContact = new Contact('Mark', 'Brown', 'mail@gmail.com', false);
	const defaultContact2 = new Contact('Peter', 'Laying', 'mail@pt.com', true);
	const defaultContact3 = new Contact('Mike', 'Blower', 'mail@gmx.com', false);

	// COMPONENT STATES
	const [contacts, setContacts] = useState([defaultContact, defaultContact2, defaultContact3])

	// LIFE CYCLES OF THIS COMPONENT
	useEffect(() => {
		// MOUNT DID FOR THE COMPONENT
		console.log('Contacts modified');
		return () => {
			console.log('Contacts will be removed');
		}
	}, [contacts])

	/**
	 * CRUD
	 */
	function addContact(contact){
		console.log('Connection Mode Changed')
		const index = contacts.indexOf(contact);
		const tempContacts = [...contacts];
		tempContacts.push(contact);
		setContacts(tempContacts);
	}

	// CHANGE STATUS ON/OFF
	function connectionModeOnOff(contact){
		console.log('Contact status modified');
		const index = contacts.indexOf(contact);
		const tempContacts = [...contacts];
		tempContacts[index].connected = !tempContacts[index].connected;
		setContacts(tempContacts);
	}

	// REMOVE A CONTACT
	function removeContact(contact){
		console.log('Contact removed');
		const index = contacts.indexOf(contact);
		const tempContacts = [...contacts];
		tempContacts.splice(index, 1);
		setContacts(tempContacts);
	}

	return (
		<div className='col-12'>
				
				<div className='card'>
					{/* Card Header (title) */}
					<div className='card-header p-3'>
						<h5>Your contacts list</h5>
					</div>

					{/* Card Body (content) */}
					<div className='card-body overflow-auto' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
						<table>
							<thead>
								<tr>
									<th scope='col'>Name</th>
									<th scope='col'>Last Name</th>
									<th scope='col'>Email</th>
									<th scope='col'>Status</th>
								</tr>
							</thead>
							<tbody>
								{/* TODO: Iterar sobre una lista de tareas */}
								{contacts.map((
									contact,
									index) => 
										{
											return(<ContactComponent
											key={index}
											contact={contact}
											removeContact={removeContact}
											connectionMode={connectionModeOnOff}
											></ContactComponent>)
										}
									)}
							</tbody>
						</table>
					</div>
					<Addcontactform addContactNow={addContact}></Addcontactform>
				</div>
			</div>
		// <div>
		// 	<ContactComponent contact={defaultContact}></ContactComponent>
		// </div>
	);
};


export default ContactListComponent;
