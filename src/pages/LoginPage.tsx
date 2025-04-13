export default function LoginPage() {
    const handleSocialLogin = (provider: 'google' | 'github') => {
        window.location.href = `http://kulift.com/oauth2/authorization/${provider}`;
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>로그인</h1>
            <button onClick={() => handleSocialLogin('google')}>구글 로그인</button>
            <button onClick={() => handleSocialLogin('github')}>깃허브 로그인</button>
        </div>
    );
}
