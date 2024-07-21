// components/Login.tsx
'use client'

import LoginForm from "@/components/ui/atoms/LoginForm";
import LoginImage from "@/components/ui/atoms/loginImage";

const Login: React.FC = () => {
 
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginImage />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;