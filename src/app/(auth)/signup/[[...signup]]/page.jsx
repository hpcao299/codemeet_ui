import { SignUp } from '@clerk/nextjs';

const SignupPage = () => {
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
            <SignUp />
        </div>
    );
};

export default SignupPage;
