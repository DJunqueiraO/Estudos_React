import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Redux, Zustand } from './things/things';

export function App() {

  const routes = [
    {path: '/*', element: <></>},
    {name: 'Zustand', path: 'zustand', element: <Zustand/>},
    {name: 'Redux', path: 'redux', element: <Redux/>}
  ]

  return (
    <div className="app">
      <div style={{display: 'flex', gap: '5px', backgroundColor: '#222'}}>
        {routes.map(($0, i) => ($0.name && 
          <a 
            key={i} 
            style={
              {
                textDecoration: 'none',
                backgroundColor: 'var(--foreground)',
                padding: '5px',
                display: 'inline-block',
                justifyContent: 'center',
              }
            }
            href={`/${$0.path}`}>
            {$0.name}
          </a>
        ))}
      </div>
      <BrowserRouter>
        <Routes>
          {routes.map($0 => <Route {...$0}/>) }
        </Routes>
      </BrowserRouter>
    </div>
  );
}