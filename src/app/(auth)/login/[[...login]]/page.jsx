import { SignIn } from '@clerk/nextjs';

const LoginPage = () => {
    return (
        <div
            className="flex-center"
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: 'url(/blue-gradient-bg.jpg)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <SignIn />
        </div>
    );
};

export default LoginPage;
