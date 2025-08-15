import { findUserByEmail, createUser } from '../services/auth.service.js';
import { hashPassword, verifyPassword } from '../utils/password.js';
import { signJwt } from '../utils/jwt.js';

function toPublicUser(u) {
  return { id: u.id, email: u.email, createdAt: u.createdAt };
}

export async function signUp(req, res, next) {
  try {
    const { email, password } = req.body;

    const existing = await findUserByEmail(email);
    if (existing) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const hashed = await hashPassword(password);
    const user = await createUser({ email, password: hashed });

    const token = signJwt({ sub: String(user.id), email: user.email });
    return res.status(201).json({ user: toPublicUser(user), token });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const ok = await verifyPassword(password, user.password);
    if (!ok) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = signJwt({ sub: String(user.id), email: user.email });
    return res.status(200).json({ user: toPublicUser(user), token });
  } catch (err) {
    next(err);
  }
}
