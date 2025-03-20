import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layouts/MainLayout/MainLayout';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import ClientLayout from './layouts/ClientLayout/ClientLayout';
import Landing from './pages/Landing';
import LotsPage from './features/lots/pages/LotsPage';
import LotPage from './features/lots/pages/LotPage';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Rota pública */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/lotes" element={<LotsPage />} />
              <Route path="/lotes/:id" element={<LotPage />} />
            </Route>

            {/* Rotas do cliente */}
            <Route element={<ClientLayout />}>
              <Route path="/cliente/*" element={<div>Área do Cliente</div>} />
            </Route>

            {/* Rotas administrativas */}
            <Route element={<AdminLayout />}>
              <Route path="/admin/*" element={<div>Área Administrativa</div>} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
