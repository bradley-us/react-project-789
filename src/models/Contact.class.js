export class Contact {
	name = '';
	lastName = '';
	email = '';
	connected = false;

	constructor(name1, lastName1, email, connected){
		this.name = name1;
		this.lastName = lastName1;
		this.email = email;
		this.connected = connected;
	}
}