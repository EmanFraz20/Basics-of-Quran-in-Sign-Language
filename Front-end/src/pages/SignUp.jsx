// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import OAuth from '../Components/OAuth';


// function SignUp() {
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
  
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//     setLoading(true);
//     setError(false);
//     //create a request to the database to store formData in the database
//     const res = await fetch('/api/auth/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });
//     const data = await res.json();
//     console.log(data);
//     setLoading(false);
//     if (data.success === false) {
//       setError(true);
//       return;
//     }
//     navigate("/signin");
//     }catch (error) {
//       setLoading(false);
//       setError(true);
//     }
//   };  

//   return (
//     <>
//     <div><Navbar/></div>
//     <div className='p-3 max-w-lg mx-auto'>
//       <h1 className='text-3xl text-center font-semibold my-20'>Sign Up</h1>
//       <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
//         <input 
//           type='text' 
//           placeholder='Username' 
//           id='username' 
//           className='bg-slate-100 p-3 rounded-lg'
//           required
//           onChange={handleChange} 
//         />
        
//         <input 
//           type='email' 
//           placeholder='Email' 
//           id='email' 
//           className='bg-slate-100 p-3 rounded-lg'
//           onChange={handleChange} 
//         />
//         <input 
//         type='password' 
//         placeholder='Password' 
//         id='password' 
//         className='bg-slate-100 p-3 rounded-lg' 
//         onChange={handleChange} 
//       />
//         <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
//           {loading ? 'Loading...' : 'Sign Up'}
//         </button>
//         <OAuth />
//       </form>
//       <div className='flex gap-2 mt-5'>
//         <p>Have an account?</p>
//         <Link to="/signin" className='text-blue-500'>Sign In
//         </Link>
//       </div>
//       <p className='text-red-700 mt-5'>
//         {error && 'Something went Wrong!'}
//       </p>
//     </div>
//     </>
//   )
// }

// export default SignUp;


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import OAuth from '../Components/OAuth';

function SignUp() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Validation rules
  const validate = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username || formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters long.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password =
        'Password must be strong';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run validation before submitting
    if (!validate()) return;

    try {
      setLoading(true);

      // Send request to the backend
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (!data.success) {
        setErrors({ form: data.message || 'An error occurred.' });
        return;
      }

      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setErrors({ form: 'An unexpected error occurred.' });
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-20'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {/* Username Input */}
          <input
            type='text'
            placeholder='Username'
            id='username'
            className='bg-slate-100 p-3 rounded-lg'
            onChange={handleChange}
          />
          {errors.username && (
            <p className='text-red-500 text-sm'>{errors.username}</p>
          )}

          {/* Email Input */}
          <input
            type='email'
            placeholder='Email'
            id='email'
            className='bg-slate-100 p-3 rounded-lg'
            onChange={handleChange}
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email}</p>
          )}

          {/* Password Input */}
          <input
            type='password'
            placeholder='Password'
            id='password'
            className='bg-slate-100 p-3 rounded-lg'
            onChange={handleChange}
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password}</p>
          )}

          {/* Submit Button */}
          <button
            disabled={loading}
            className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>

          <OAuth />
        </form>

        {/* Link to Sign In */}
        <div className='flex gap-2 mt-5'>
          <p>Have an account?</p>
          <Link to='/signin' className='text-blue-500'>
            Sign In
          </Link>
        </div>

        {/* Form Error */}
        {errors.form && (
          <p className='text-red-700 mt-5'>{errors.form}</p>
        )}
      </div>
    </>
  );
}

export default SignUp;





