import {memo} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const NotFound = memo(function () {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className='mb-8 font-bold text-3xl'>This page doesn't exist</h2>
      <div className='flex gap-3'>
        <Link to='/' className='bg-black p-3 text-white rounded-lg' replace>
          Homepage
        </Link>
        <button
          className='bg-black p-3 text-white rounded-lg'
          onClick={() => navigate(-1)}
        >
          Previous Page
        </button>
      </div>
    </div>
  );
});

export default NotFound;
