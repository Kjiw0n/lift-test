import { BoardType } from '@/types/Board';

export const dummyBoards: BoardType[] = [
	{
		title: 'To Do',
		cards: [
			{
				status: 'TODO',
				title: '테스크 순서 변경 기능',
				description: 'Unassigned',
			},
			{
				status: 'TODO',
				title: '보드 수정시 드래그 안되는 문제',
				description: 'ccg',
			},
		],
	},
	{
		title: 'IN PROGRESS',
		cards: [
			{ status: 'IN_PROGRESS', title: '코드 리팩터링', description: 'ccg' },
			{ status: 'IN_PROGRESS', title: '칸반보드 UI개선', description: 'abcd1234' },
			{ status: 'IN_PROGRESS', title: 'time test', description: 'abcd1234' },
			{ status: 'IN_PROGRESS', title: '프로젝트 통계 기능', description: 'ccg' },
			{ status: 'IN_PROGRESS', title: '파일 첨부 기능', description: 'ccg' },
		],
	},
	{
		title: 'DONE',
		cards: [
			{ status: 'DONE', title: '칸반보드 기능', description: 'ccg' },
			{ status: 'DONE', title: '사용자 인증/인가 기능 구현', description: 'ccg' },
			{ status: 'DONE', title: '관리자 기능 구현', description: 'kyle' },
			{ status: 'DONE', title: '프로젝트 권한 기반 접근 제어', description: 'kyle' },
			{ status: 'DONE', title: '드래그&드롭 기능 추가', description: 'ccg' },
			{ status: 'DONE', title: '보드 순서 변경 기능', description: 'ccg' },
		],
	},
];
