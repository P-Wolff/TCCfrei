//import { Link } from 'react-router-dom';


import './index.scss';

export default function App() {
  return (
    <div className="pagina-app">

      <header>
        <img src="#" alt="logo-HSSW Code" />
        <nav className='menu'>
          <div className='menu-toggle' 
          id='menu-toggle'>
            ≡
          </div>
          <ul className='menu-toggle menu'>
            <il>Home</il>
            <il>About</il>
            <il>Resources</il>
            <il>Feedback</il>
            <il>Contact</il>
          </ul>
        </nav>
      </header>

      <main>
        <section>-
            <div className='info-container'>
              <h1>HSSW Code</h1>
              <p>A tecnologia e o mundo estão a evoluir, e você?</p>
            </div>
            <img src="/assets/images/header-container.jpg" alt="" />
        </section>
    </main>

    <footer>
        <p>&copy; 2024 HSSW Code</p>
    </footer>
    <script src="./index.jsx"></script>


    </div>
  );
}

