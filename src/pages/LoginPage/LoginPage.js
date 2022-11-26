import React from 'react';
import './loginpage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import Title from '../../components/Shared/Title';
import Loading from "../../components/Loading/Loading"
import { useStore } from '../../stored';
import { Navigate } from 'react-router-dom';
import { useSearchParams } from '../../hook/useSearchParams';

const LoginPage = () => {
  const { user, loading } = useStore((state) => state);
  const searchParams = useSearchParams();
  if (user) return <Navigate to={searchParams.get("redirect") || "/"} />;
  return (
    <div className="login-page">
      <Title title={'UTH Movies'} />
      <LoginForm />
      {loading && <Loading />}
    </div>
  );
};

export default LoginPage;
