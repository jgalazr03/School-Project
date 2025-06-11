import jwt from 'jsonwebtoken';

const MOCK_USER = {
  id: 1,
  email: 'test@example.com',
  password: '1234',
};

export const loginService = async (email: string, password: string): Promise<string> => {
  if (email !== MOCK_USER.email || password !== MOCK_USER.password) {
    throw new Error('Credenciales inválidas');
  }

  const token = jwt.sign({ userId: MOCK_USER.id }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });

  return token;
};