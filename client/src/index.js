import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';

import App from './App';

// const store = createStore();
const root = createRoot(document.getElementById('root'));
root.render(<App />);
