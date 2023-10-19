import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faHtml5, faBootstrap, faPhp, faReact, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

function Education() {
    return (
      <div class="p-2">
        <div className="container">
          <div className="my-3 d-flex justify-content-center" style={{borderBottom:"grey solid"}}>
            <h1 className="text-light px-1">Education </h1>
            <h1 className="text-danger">Details</h1>
          </div>
        </div>
        <div className="container p-3">
          <div className="row">
            <div className="bg-warning col-sm text-light text-center pt-3 mx-2">
              <p className="display-7">2018-2019</p>
              <h2>SSC</h2>
              <h2>KKR Gowtham School</h2>
            </div>
            <div className="bg-warning col-sm text-light text-center pt-3 mx-2">
              <p className="display-7">2019-2021</p>
              <h2>Intermediate</h2>
              <h2>Sri Chaitanya College</h2>
            </div>
            <div className="bg-warning col-sm text-light text-center pt-3 mx-2">
              <p className="display-7">2021-2025</p>
              <h2>B-Tech</h2>
              <h2>VIT-AP University</h2>
            </div>
          </div>
        </div>
        <div className="container bg-warning py-3 p">
          <div className="d-flex justify-content-center pt-2">
            <h1 className="text-dark">My</h1>
            <h1 className="text-light mx-2">Skills</h1>
          </div>
          <div className="row mx-5">
            <div className="col-sm-3 text-center">
              <FontAwesomeIcon icon={faJava} size="7x" />
              <h4>Java</h4>
            </div>
            <div className="col-sm-3 text-center">
              <FontAwesomeIcon icon={faPython} size="7x" />
              <h4>Python</h4>
            </div>
            <div className="col-sm-3 text-center">
              <FontAwesomeIcon icon={faHtml5} size="7x" />
              <h4>HTML</h4>
            </div>
            <div className="col-sm-3 text-center">
              <FontAwesomeIcon icon={faBootstrap} size="7x" />
              <h4>Bootstrap</h4>
            </div>
            <div className="col-sm-3 text-center">
              <FontAwesomeIcon icon={faPhp} size="7x" />
              <h4>PHP</h4>
            </div>
            <div className="col-sm-3 text-center">
              <FontAwesomeIcon icon={faReact} size="7x" />
              <h4>React</h4>
            </div>
            <div className="col-sm-3 text-center">
              <FontAwesomeIcon icon={faCss3} size="7x" />
              <h4>CSS</h4>
            </div>
            <div className="col-sm-3 text-center">
              <FontAwesomeIcon icon={faJs} size="7x" />
              <h4>JavaScript</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Education;
  