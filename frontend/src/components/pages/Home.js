import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from "react-router-dom";
import '../css/all_pages.css'
import AuthContext from '../context/AuthContext';

function Home() {
  const {isAuth} = useContext(AuthContext)
  
  return (
    <div className='row homeDiv'>
      <div className="col-6 introduction">
        <h1>Library App</h1>
        <p className='center-text'>A digital repository, often referred to as an electronic library or e-library, is a meticulously organized collection of documents stored in a digital format, accessible via the internet or digital storage media. The primary purpose of an e-library is to efficiently archive, retrieve, and update various documents and associated digital books typically in PDF format. This platform facilitates the creation and seamless updating of a diverse range of books, ensuring that the information remains current and relevant. <br/>
        E-libraries provide users with complimentary access to an extensive array of books and resources. The immediate accessibility of these materials not only saves users valuable time but also allows them to prioritize other tasks, while also enabling the convenient storage of discovered resources for future reference. This digital library serves as an invaluable resource for establishing freely accessible public libraries, granting users the liberty to read and archive books at no cost.
        </p>
        <p>
          {!isAuth? <Link to="/login"><Button className='darkButton'>Log In</Button></Link> : ""}
        </p>
      </div>
      <div className='col-6 e-librayPic'>
        <img src={'/images/e-library.png'} alt='E-Library' className='homeImage' />
      </div>
      <Outlet/>
    </div> 
  )
}

export default Home;
