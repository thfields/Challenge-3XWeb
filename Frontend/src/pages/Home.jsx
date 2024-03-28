import { Link } from 'react-router-dom';
import logo from '../assets/logo-home.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="logo-container">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={logo} alt="Logo" style={{width: 720, height: 420}}/>
            </div>
            </div>
            <div className="cta-container">
                <h2>Bem-vindo à nossa TaskList!</h2>
                <p>Crie as suas listas de tarefas com prioridades e status</p>
                <Link to="/tasks" className="btn">Ver Tarefas</Link>
            </div>
        </div>
    );
};

export default Home;
