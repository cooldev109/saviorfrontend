import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px'
      }}>
        <h1 style={{
          fontSize: '48px',
          color: '#16a34a',
          fontWeight: 'bold'
        }}>
          🌱 Savior
        </h1>

        {user && (
          <button
            onClick={logout}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Sair
          </button>
        )}
      </div>

      <h2 style={{
        fontSize: '24px',
        color: '#374151',
        marginBottom: '32px'
      }}>
        Plataforma Eco-Challenge & Marketplace
      </h2>

      {user ? (
        <div style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          marginBottom: '24px'
        }}>
          <h3 style={{
            fontSize: '28px',
            marginBottom: '16px',
            color: '#1f2937'
          }}>
            Olá, {user.firstName || user.username}! 👋
          </h3>

          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            marginBottom: '16px',
            lineHeight: '1.6'
          }}>
            Bem-vindo de volta à plataforma Savior. Aqui você pode participar de desafios ecológicos
            e explorar nosso marketplace sustentável.
          </p>

          <div style={{
            backgroundColor: '#f0fdf4',
            padding: '16px',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
            <p style={{ fontSize: '14px', color: '#059669', margin: '4px 0' }}>
              📧 Email: {user.email}
            </p>
            <p style={{ fontSize: '14px', color: '#059669', margin: '4px 0' }}>
              👤 Usuário: @{user.username}
            </p>
            <p style={{ fontSize: '14px', color: '#059669', margin: '4px 0' }}>
              {user.isVerified ? '✅ Conta verificada' : '⏳ Conta não verificada'}
            </p>
          </div>
        </div>
      ) : (
        <div style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          marginBottom: '24px'
        }}>
          <h3 style={{
            fontSize: '28px',
            marginBottom: '16px',
            color: '#1f2937'
          }}>
            Bem-vindo ao Savior! 🎉
          </h3>

          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            marginBottom: '24px',
            lineHeight: '1.6'
          }}>
            Uma plataforma social para desafios ecológicos e marketplace sustentável.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <Link to="/login">
              <button style={{
                backgroundColor: '#16a34a',
                color: 'white',
                padding: '14px 28px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Entrar
              </button>
            </Link>

            <Link to="/register">
              <button style={{
                backgroundColor: 'white',
                color: '#16a34a',
                padding: '14px 28px',
                border: '2px solid #16a34a',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Criar Conta
              </button>
            </Link>
          </div>
        </div>
      )}

      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        border: '2px solid #e5e7eb'
      }}>
        <p style={{ margin: '8px 0', fontSize: '14px', color: '#059669' }}>
          ✅ Frontend: React + Vite + TypeScript
        </p>
        <p style={{ margin: '8px 0', fontSize: '14px', color: '#059669' }}>
          ✅ Backend: Node.js + Express + PostgreSQL
        </p>
        <p style={{ margin: '8px 0', fontSize: '14px', color: '#059669' }}>
          ✅ Autenticação: Login e Registro funcionando!
        </p>
      </div>
    </div>
  );
};

export default Home;
