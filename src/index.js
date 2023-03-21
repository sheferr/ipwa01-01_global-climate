import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


createRoot(document.getElementById('header')).render(<Header />);

createRoot(document.getElementById('content')).render(<Content />);

createRoot(document.getElementById('footer')).render(<Footer />);