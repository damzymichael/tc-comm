import {BrandIcon} from '../components/SVGs';
import {Button} from '../components/Button';
import {FormEvent, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/', {replace: true});
    }, 2500);
  };
  return (
    <section className='bg-[#fafafa] max-w-screen-sm min-w-[320px] mt-16 mx-auto p-3 py-5 rounded-xl'>
      <BrandIcon className='mx-auto mb-10' />
      <h3 className='text-center font-semibold mb-5 text-xl'>Sign in</h3>
      <form
        className='text-black w-3/5 mx-auto min-w-[300px]'
        onSubmit={handleSubmit}
      >
        <input
          type='email'
          placeholder='Email Address'
          className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-4 w-full'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-2 w-full'
        />
        <a href='#' className='text-xs mb-10 inline-block'>
          Forgot password?
        </a>
        <Button full loading={loading}>
          Sign in
        </Button>
        <p className='mt-3'>
          Don't have an account?{' '}
          <Link to='/signup' className='font-medium'>
            Create an account
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
