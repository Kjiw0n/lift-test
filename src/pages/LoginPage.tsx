import { useState } from 'react';
import styled from '@emotion/styled';

import userLogin from '../apis/auth/login';
import googleImg from '@/assets/google-logo.png';
import githubImg from '@/assets/github-logo.png';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');

	/** TODO: 회원가입 페이지 만들기 */
	// const handleLogin = async () => {
	// 	try {
	// 		const { Authorization } = await userLogin({ email, password: pw });
	// 		localStorage.setItem('access_token', Authorization);
	// 		alert('로그인 성공');
	// 		// window.location.href = "/"; // 로그인 후 이동할 페이지
	// 	} catch (error) {
	// 		alert('로그인 실패');
	// 		console.error(error);
	// 	}
	// };

	return (
		<LoginPageLayout>
			<LoginPageTextContainer>
				<LoginPageTitle>LIFT</LoginPageTitle>
				<LoginPageText>Lightweight Issue & Flow Tracker</LoginPageText>
			</LoginPageTextContainer>

			<LoginContainer>
				<LoginTitle>Login</LoginTitle>
				<LocalLoginContainer>
					<LoginInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
					<LoginInput type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="password" />
					<LoginBtn>로그인</LoginBtn>
					<LoginTextContainer>
						<LoginText>회원가입</LoginText>
						<LoginText>아이디/비밀번호 찾기</LoginText>
					</LoginTextContainer>
				</LocalLoginContainer>

				<SocialLoginContainer>
					<SocialLoginBtn onClick={() => (window.location.href = 'http://kulift.com/oauth2/authorization/google')}>
						<img src={googleImg} alt="google" width="30" height="30" />
					</SocialLoginBtn>
					<SocialLoginBtn onClick={() => (window.location.href = 'http://kulift.com/oauth2/authorization/github')}>
						<img src={githubImg} alt="google" width="30" height="30" />
					</SocialLoginBtn>
				</SocialLoginContainer>
			</LoginContainer>
		</LoginPageLayout>
	);
};

export default LoginPage;

const loginPageColors = {
	background: '#f8fafc', // 매우 연한 회청색 (거의 흰색)
	title: '#1f2937', // 어두운 네이비/차콜 계열 (자주 쓰임)
	primaryText: '#4b5563', // 중간 회색 텍스트 (안내/본문용)
	secondaryText: '#9ca3af', // 흐릿한 회색 (placeholder 등)
	accent: '#3b82f6', // 평범한 파란색 (로그인 버튼 등)
};

const LoginPageLayout = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: space-between;
	align-items: center;

	background-color: ${loginPageColors.background};

	gap: 50px;
`;

const LoginPageTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: flex-start;
	justify-content: center;

	margin-left: 10rem;

	gap: 20px;
`;

const LoginPageTitle = styled.p`
	font-size: 7rem;
	font-weight: 700;

	color: ${loginPageColors.title};
`;

const LoginPageText = styled.p`
	font-size: 3rem;
	font-weight: 400;
	font-style: italic;

	color: ${loginPageColors.secondaryText};
`;

const LoginContainer = styled.div`
	height: 100%;
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	box-sizing: border-box;
	padding: 10rem;

	background-color: white;
	gap: 50px;
`;

const LoginTitle = styled.p`
	font-size: 4rem;
	font-weight: 600;
	color: ${loginPageColors.primaryText};
`;

const LocalLoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 15px;
`;

const LoginInput = styled.input`
	width: 40rem;
	height: 7rem;
	border: 1px solid lightgray;
	border-radius: 20px;

	padding: 0 2rem;
	box-sizing: border-box;

	font-size: 1.6rem;
`;

const LoginBtn = styled.button`
	width: 40rem;
	height: 7rem;
	border-radius: 20px;
	background-color: ${loginPageColors.accent};

	font-size: 2rem;
	font-weight: 600;
	color: white;
	cursor: pointer;
`;

const LoginTextContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	gap: 20px;
`;

const LoginText = styled.p`
	font-size: 1.6rem;
	font-weight: 400;
	color: ${loginPageColors.secondaryText};
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
	&:active {
		color: ${loginPageColors.accent};
	}
`;

const SocialLoginContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const SocialLoginBtn = styled.button`
	width: 20rem;
	height: 7rem;
	border: 1px solid lightgray;
	border-radius: 20px;
	background-color: #fff;

	font-size: 1.6rem;
	font-weight: 400;
	cursor: pointer;
`;
