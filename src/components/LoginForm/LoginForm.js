import React from 'react';
import './loginform.css';
import { useStore } from '../../stored';
import { getAdditionalUserInfo, signInWithPopup } from 'firebase/auth';
import { FaFacebook } from 'react-icons/fa';
import { auth, googleProvider } from '../../config/firebase';
import { toast } from 'react-toastify';
import { addUser } from '../../actions/fireStoreActions';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { loading, setLoading } = useStore((state) => state);
  const { setUser } = useStore((state) => state);
  const navigate = useNavigate();
  const handleLogin = async (Provider) => {
    setLoading(true);
    try {
      const data = await signInWithPopup(auth, Provider);
      console.log(data.user);
      const { displayName, email, photoURL, uid } = data.user;
      const details = getAdditionalUserInfo(data);
      if (details.isNewUser) {
        await addUser({ displayName, email, photoURL, uid });
      }
      setLoading(false);
      return;
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
    navigate("/login");
  };

  return (
    <div className="login-form">
      <h1 className="login-form-title">Sign In</h1>
      <div className="login-form-social">
        <button
          className={`login-form-button login-form-google ${loading ? 'disableButton' : ''}`}
          disabled={loading}
          onClick={() => handleLogin(googleProvider)}
        >
          <FaFacebook className="fa-facebook" />
          <span>Login with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
