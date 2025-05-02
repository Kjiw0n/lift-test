export const theme = {
	colors: {
		background: '#f8fafc', // 매우 연한 회청색 (거의 흰색)
		title: '#1f2937', // 어두운 네이비/차콜 계열 (자주 쓰임)
		primaryText: '#4b5563', // 중간 회색 텍스트 (안내/본문용)
		secondaryText: '#9ca3af', // 흐릿한 회색 (placeholder 등)
		accent: '#3b82f6', // 평범한 파란색 (로그인 버튼 등)
		hover: 'rgba(59, 130, 246, 0.1)', // accent hover용
	},
};

export type ThemeType = typeof theme;
