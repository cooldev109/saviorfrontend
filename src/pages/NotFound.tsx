import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '500px',
      }}>
        <h1 style={{
          fontSize: '120px',
          fontWeight: 'bold',
          color: '#16a34a',
          margin: '0',
          lineHeight: '1',
        }}>
          404
        </h1>

        <h2 style={{
          fontSize: '32px',
          color: '#1f2937',
          marginTop: '24px',
          marginBottom: '16px',
        }}>
          Página Não Encontrada
        </h2>

        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          marginBottom: '32px',
          lineHeight: '1.6',
        }}>
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        <Link to="/">
          <button style={{
            backgroundColor: '#16a34a',
            color: 'white',
            padding: '14px 28px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
          }}>
            Voltar para Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
