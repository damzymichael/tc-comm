import {BrandIcon, HashIcon} from '../../components/SVGs';
import {Link} from 'react-router-dom';
import menu from '../../assets/menu.svg';
import {Outlet, useLocation} from 'react-router-dom';

function AdminLayout() {
  const {pathname} = useLocation();
  document.body.style.backgroundColor = '#fafafa';
  const linkInfo: {text: string; link: string}[] = [
    {text: 'Overview', link: '/admin/overview'},
    {text: 'Orders', link: '/admin/orders'},
    {text: 'Inventory', link: '/admin/inventory'},
    {text: 'Stockpile', link: '/admin/stockpile'}
  ];

  return (
    <>
      {pathname !== '/admin' && (
        <>
          <img src={menu} alt='menu icon' className='w-8 sm:hidden' />
          <section className='p-2 w-1/5 fixed top-0 hidden sm:block min-w-[180px] max-w-[200px] bg-white h-screen'>
            <BrandIcon className='mx-auto mb-10' />
            <nav>
              <ul>
                {linkInfo.map(({text, link}) => (
                  <li
                    className={
                      'mb-3 p-2 text-sm cursor-pointer rounded-lg ' +
                      (pathname === link ? 'bg-black text-white' : 'text-black')
                    }
                    key={text}
                  >
                    <Link to={link} className='flex gap-2 items-center'>
                      <HashIcon black={pathname !== link} />
                      <span> {text} </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </>
      )}

      <main
        className={
          (pathname != '/admin' ? 'sm:ml-52' : '') + ' p-3 pt-5 flex-grow'
        }
      >
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
