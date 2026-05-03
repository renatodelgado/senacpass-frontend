import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../components/layout/Layout';
import { Dashboard } from '../modules/dashboard';
import { Turmas } from '../modules/turmas';
import { Relatorios } from '../modules/relatorios';
import { IoT } from '../modules/iot';
import { Configuracoes } from '../modules/configuracoes';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/turmas" element={<Turmas />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/iot" element={<IoT />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Route>
    </Routes>
  );
}