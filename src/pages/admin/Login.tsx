import {useState} from 'react';
import {BrandIcon} from '../../components/SVGs';
import {Button} from '../../components/Button';
import {FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => navigate('/admin/overview', {replace: true}), 4000);
  }
  return (
    <section className='bg-[#f5f5f5] max-w-screen-sm min-w-[320px] mt-16 mx-auto p-3 rounded-xl'>
      <BrandIcon className='mx-auto mb-16' />
      <h3 className='text-center font-semibold mb-5 text-xl'>Admin Login</h3>
      <form
        className='text-black w-3/5 mx-auto min-w-[300px]'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Username'
          className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-3 w-full'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-20 w-full'
        />
        <Button full loading={loading}>
          Login
        </Button>
      </form>
    </section>
  );
}

export default Login;
