// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       <div className="home-content">
//         <h1>Welcome to the Authentication System</h1>
//         <p>Securely manage your account and access your data.</p>
//         <div className="home-buttons">
//           <button onClick={() => navigate('/register')} className="home-btn register-btn">
//             Register
//           </button>
//           <button onClick={() => navigate('/login')} className="home-btn login-btn">
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the Authentication System</h1>
        <p>Securely manage your account and access your data with ease.</p>
        <div className="home-buttons">
          <button 
            onClick={() => navigate('/register')} 
            className="home-btn register-btn">
            Register
          </button>
          <button 
            onClick={() => navigate('/login')} 
            className="home-btn login-btn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
