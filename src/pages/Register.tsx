import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { registerSchema } from '../schemas/auth.schema';
import type { RegisterFormData } from '../schemas/auth.schema';

const Register = () => {
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsSubmitting(true);
      setErrorMessage('');
      await registerUser(data);
      navigate('/');
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.message ||
        error.message ||
        'Erro ao criar conta. Tente novamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#16a34a',
            marginBottom: '8px',
          }}>
            🌱 Savior
          </h1>
          <h2 style={{
            fontSize: '24px',
            color: '#1f2937',
            marginBottom: '8px',
          }}>
            Criar Conta
          </h2>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            Junte-se à comunidade eco-friendly!
          </p>
        </div>

        {errorMessage && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#dc2626',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '14px',
          }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px',
              }}>
                Nome
              </label>
              <input
                type="text"
                {...register('firstName')}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                }}
                placeholder="João"
              />
              {errors.firstName && (
                <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px',
              }}>
                Sobrenome
              </label>
              <input
                type="text"
                {...register('lastName')}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                }}
                placeholder="Silva"
              />
              {errors.lastName && (
                <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px',
            }}>
              Nome de Usuário
            </label>
            <input
              type="text"
              {...register('username')}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                outline: 'none',
              }}
              placeholder="joaosilva"
            />
            {errors.username && (
              <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
                {errors.username.message}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px',
            }}>
              Email
            </label>
            <input
              type="email"
              {...register('email')}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                outline: 'none',
              }}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px',
            }}>
              Senha
            </label>
            <input
              type="password"
              {...register('password')}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                outline: 'none',
              }}
              placeholder="••••••••"
            />
            {errors.password && (
              <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
                {errors.password.message}
              </p>
            )}
            <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
              Mínimo 8 caracteres, uma maiúscula e um número
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              backgroundColor: isSubmitting ? '#9ca3af' : '#16a34a',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              marginBottom: '16px',
            }}
          >
            {isSubmitting ? 'Criando conta...' : 'Criar Conta'}
          </button>

          <p style={{ textAlign: 'center', fontSize: '14px', color: '#6b7280' }}>
            Já tem uma conta?{' '}
            <Link
              to="/login"
              style={{
                color: '#16a34a',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
