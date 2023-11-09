import {  Link } from 'react-router-dom';
function Home(){
    return(
        <div>
        <div class="container bg-warning">
            <nav class="navbar ">
             <div class="navbar-brand"><Link to="/home1" class="nav-link bg-dark text-light mx-2 p-2">Portfolio</Link></div>
             <div class="nav">
                <Link to="/home1" class="nav-link bg-dark mx-2 text-light p-2">Home</Link>
                <Link to="/education" class="nav-link bg-dark mx-2 text-light p-2">Education</Link>
                <Link to="/contact" class="nav-link bg-dark mx-2 text-light p-2">Contact</Link>
             </div>
            </nav>
        </div>
        </div>
        
    )
}
export default Home;