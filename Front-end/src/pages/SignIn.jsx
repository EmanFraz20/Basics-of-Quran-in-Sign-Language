import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../Redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import OAuth from '../Components/OAuth';

function SignIn() {
  const [formData, setFormData] = useState({});
  // Extract loading and error from the user slice of the state
  const { loading, error } = useSelector((state) => state.user); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    dispatch(signInStart());

    //create a request to the database to store formData in the database
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      dispatch(signInFailure(data));
      return;
    }
    dispatch(signInSuccess(data));
    navigate("/");
    }catch (error) {
      dispatch(signInFailure(error));
    }
  };  

  return (
    <>
    <div><Navbar/></div>
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-20'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input 
          type='email' 
          placeholder='Email' 
          id='email' 
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange} 
        />
        <input 
        type='password' 
        placeholder='Password' 
        id='password' 
        className='bg-slate-100 p-3 rounded-lg'
        onChange={handleChange} 
      />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      <OAuth />  
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to="/signup" className='text-blue-500'>Sign Up
        </Link>
      </div>
      <p className='text-red-700 mt-5'>
        {error ? error.message || 'Something went Wrong!' : ''}
      </p>
    </div>
    </>
  )
}

export default SignIn;