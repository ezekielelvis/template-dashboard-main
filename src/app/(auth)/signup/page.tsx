// components/Signup.tsx
'use client'

import axios from "axios"
import Link from "next/link"
import { useState } from "react"
import { FaGithub, FaGoogle } from "react-icons/fa"
import LoginImage from "@/components/ui/atoms/loginImage";
import { usePathname, useRouter } from "next/navigation"


const Signup: React.FC = () => {
  const router = useRouter()

  const [newAccount, setNewAccount] = useState({
    username: "",
    email: "",
    password: ""
  })


  const handleChange = (event: any) => {
    setNewAccount({...newAccount, [event.target.name]: event.target.value })
    console.log("event changing")
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("clicked")
    try{
      const response = await axios.post("https://sandbox-backend-0f2e.onrender.com/api/auth/signup", newAccount)
      console.log(response)
      if(response.status === 201){
        router.push("/signin")
      }
    }catch{
      console.error(Error)
    }
  }
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginImage />
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-white">
        {/* <SignupForm /> */}
        <div className="flex h-full w-screen items-center justify-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-8 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-xs">
          <h2 className="mt-6 text-center text-xl font-bold leading-8 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xs">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-5 text-gray-900"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  value={newAccount.username}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  value={newAccount.email}
                  onChange={handleChange}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  value={newAccount.password}
                  onChange={handleChange}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div>
              {/* <Link href="/details"> */}

             
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold leading-5 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Sign Up
              </button>
              {/* </Link> */}
            </div>
          </form>

          <div className="mt-4 flex flex-row">
            <button
              type="button"
              className="mx-1 flex w-full items-center justify-center rounded-md border border-gray-300 px-2 py-1 text-sm font-semibold leading-5 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <FaGithub className="mr-1" />
              Github
            </button>
            <button
              type="button"
              className="mx-1 flex w-full items-center justify-center rounded-md border border-gray-300 px-2 py-1 text-sm font-semibold leading-5 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <FaGoogle className="mr-1" />
              Google
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            Already a member?{" "}
            <Link
              href="/signin"
              className="font-semibold leading-5 text-blue-600 hover:text-blue-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Signup;