import { Request, Response } from 'express';
import { loginService } from '../services/auth.service';

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 3600 * 1000,
    });

    res.status(200).json({ message: 'Login exitoso' });
  } catch (err) {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
};

export const logoutHandler = (_req: Request, res: Response) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout exitoso' });
};