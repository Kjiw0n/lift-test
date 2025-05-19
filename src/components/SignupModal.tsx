import styled from '@emotion/styled';
import { useState } from 'react';
import { AuthInput, AuthButton, AuthTitle, AuthInputContainer } from '@/components/common/AuthComponents';
import IconButton from './common/IconButton';

type Props = {
	onClose: () => void;
};

function SignupModal({ onClose }: Props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');

	return (
		<Overlay onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<CloseButtonWrapper onClick={onClose}>
					<IconButton type="normal" iconName="IcnX" size="big" />
				</CloseButtonWrapper>
				<AuthTitle>Create Account</AuthTitle>
				<AuthInputContainer>
					<AuthInput type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
					<AuthInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
					<AuthInput type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="password" />
					<AuthButton>회원가입</AuthButton>
				</AuthInputContainer>
			</ModalContainer>
		</Overlay>
	);
}

export default SignupModal;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const ModalContainer = styled.div`
	position: relative;
	padding: 4rem;
	background: white;
	border-radius: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 5rem;
`;

const CloseButtonWrapper = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;
	cursor: pointer;
`;
