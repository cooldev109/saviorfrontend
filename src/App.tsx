import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import { LoginDesktop } from './pages/LoginDesktop';
import { CadastroDesktop } from './pages/CadastroDesktop';
import { TermosDeUsurios } from './pages/TermosDeUsurios';
import { Feed } from './pages/Feed';
import { GaleriaRecursos } from './pages/GaleriaRecursos';
import { GamesDesktop } from './pages/GamesDesktop';
import { TelaPrinciapal } from './pages/TelaPrinciapal';
import { ProblemasDesktop } from './pages/ProblemasDesktop';
import { ReunioTelaDesktop } from './pages/ReunioTelaDesktop';
import { ReunioGestoDesktop } from './pages/ReunioGestoDesktop';
import { ReunioGestoData } from './pages/ReunioGestoData';
import { AmigosDesktop } from './pages/AmigosDesktop';
import { DesafiosDesktop } from './pages/DesafiosDesktop';
import { DesafiosEvoluo } from './pages/DesafiosEvoluo';
import NotFound from './pages/NotFound';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{ fontSize: '18px', color: '#6b7280' }}>Carregando...</p>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginDesktop />} />
      <Route path="/register" element={<CadastroDesktop />} />
      <Route path="/terms" element={<TermosDeUsurios />} />

      {/* Protected Routes */}
      <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
      <Route path="/galeria" element={<ProtectedRoute><GaleriaRecursos /></ProtectedRoute>} />
      <Route path="/games" element={<ProtectedRoute><GamesDesktop /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><TelaPrinciapal /></ProtectedRoute>} />
      <Route path="/problemas" element={<ProtectedRoute><ProblemasDesktop /></ProtectedRoute>} />
      <Route path="/reuniao" element={<ProtectedRoute><ReunioTelaDesktop /></ProtectedRoute>} />
      <Route path="/reuniao-gestao" element={<ProtectedRoute><ReunioGestoDesktop /></ProtectedRoute>} />
      <Route path="/reuniao-gestao-data" element={<ProtectedRoute><ReunioGestoData /></ProtectedRoute>} />
      <Route path="/amigos" element={<ProtectedRoute><AmigosDesktop /></ProtectedRoute>} />
      <Route path="/desafios" element={<ProtectedRoute><DesafiosDesktop /></ProtectedRoute>} />
      <Route path="/desafios-evolucao" element={<ProtectedRoute><DesafiosEvoluo /></ProtectedRoute>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
