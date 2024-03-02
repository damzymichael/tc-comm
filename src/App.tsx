import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

function App() {
  const largeScreen = window.matchMedia('(min-width: 768px)').matches;
  const [isAppDisabled, setIsAppDisabled] = useState(largeScreen);

  useEffect(() => {
    function handleResize() {
      setIsAppDisabled(window.matchMedia('(min-width: 768px)').matches);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isAppDisabled) {
    return (
      <main className='h-screen flex items-center justify-center'>
        <h3 className='na-message text-center font-bold'>
          This website is not available on desktop <br /> Move along mate :)
        </h3>
      </main>
    );
  }

  return (
    <BrowserRouter>
      <Header />
      <main className='mt-20 mb-5 p-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='*' element={<NotFound />}  />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
