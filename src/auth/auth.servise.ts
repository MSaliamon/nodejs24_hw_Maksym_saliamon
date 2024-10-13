import jwt from 'jsonwebtoken';

interface User {
  id: number;
  email: string;
}

class AuthService {
  generateToken(user: User): string {
    const payload = { id: user.id, email: user.email };
    return jwt.sign(payload, 'yourSecretKey', { expiresIn: '1h' });
  }

  verifyToken(token: string): User | null {
    try {
      return jwt.verify(token, 'yourSecretKey') as User;
    } catch (err) {
      return null;
    }
  }
}

export default new AuthService();