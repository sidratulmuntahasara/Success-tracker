// src/components/SignIn.js
import { signIn } from 'next-auth/client';

export default function SignIn() {
  return (
    <button onClick={() => signIn('github')}>Sign in with GitHub</button>
  );
}