import './App.css';
import Landing from '../src/components/landing/landing.js';
import About from '../src/components/about/about.js';
import Work from '../src/components/work/work.js';
//import Contact from './components/contact/contact';
import ContactForm from './components/contact/contact';
function App() {
	return (
		<div className='App'>
			<Landing></Landing>
			<About></About>
			<Work></Work>
			<ContactForm></ContactForm>
		</div>
	);
}

export default App;
