import { signIn } from '@/libs/auth';

export default function SignInForm() {
  return (
    <div>
      <form
        action={async () => {
          'use server';

          await signIn('email', { redirectTo: '/' });
        }}
      >
        <button className="primary-btn" type="submit">
          Sign in with EMAIL
        </button>
      </form>
    </div>
  );
}