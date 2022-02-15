import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import './styles/contact.css';

import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <ContactListComponent></ContactListComponent>
    </div>
  );
}

export default App;
