import {FormEvent, useState} from 'react';
import {Button} from '../components/Button';
import {BrandIcon} from '../components/SVGs';
import {Link, useNavigate} from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/login', {replace: true});
    }, 2500);
  };
  return (
    <section className='bg-[#fafafa] max-w-screen-sm min-w-[320px] mt-12 mx-auto p-3 py-5 rounded-xl'>
      <BrandIcon className='mx-auto mb-6' />
      <h3 className='text-center font-semibold mb-5 text-xl'>
        Create an account
      </h3>
      <form
        className='text-black w-[90%] sm:w-4/5 mx-auto min-w-[300px]'
        onSubmit={handleSubmit}
      >
        <input
          type='email'
          placeholder='Email Address'
          className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-3 w-full'
        />
        <input
          type='tel'
          placeholder='Phone Number'
          className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-3 w-full'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-3 w-full'
        />
        <input
          type='password'
          placeholder='Confirm Password'
          className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-3 w-full'
        />

        <Button full loading={loading}>
          Sign in
        </Button>
        <p className='mt-3'>
          Already have an account?{' '}
          <Link to='/login' className='font-medium'>
            Sign in
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
