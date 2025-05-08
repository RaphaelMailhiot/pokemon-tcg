import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function LoginPage() {
    return (
        <main className='h-dvh flex flex-col items-center gap-6 text-4xl p-4'>
            <h1>Login</h1>
            <LoginLink>Sign in</LoginLink>
            <RegisterLink>Sign up</RegisterLink>
        </main>
    );
}