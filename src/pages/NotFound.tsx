import {memo} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const NotFound = memo(function () {
  const navigate = useNavigate();
  return (
    <div style={{height: 'calc(100vh - 225px)'}}>
      <h2 className='mb-8 font-semibold text-2xl'>
        The page you're looking for doesn't exist
      </h2>
      <div className='flex gap-3'>
        <Link to='/' className='p-3 rounded-lg border border-black' replace>
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
