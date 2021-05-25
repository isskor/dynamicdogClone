import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';
import LoadingOverlay from './LoadingOverlay';
const Layout = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [asPath]);

  return (
    <div className='container-fluid'>
      <Navbar />
      {children}
      <Footer />
      {loading && <LoadingOverlay setLoading={setLoading} />}
    </div>
  );
};

export default Layout;
