import { BoardType } from '@/types/Board';
import { CardStatusType } from '@/types/Card';
export const dummyBoards: BoardType[] = [
	{
		title: 'To Do',
		cards: [
			{ id: 1, status: 'TODO', title: '테스크 순서 변경 기능', description: 'Unassigned' },
			{ id: 2, status: 'TODO', title: '보드 수정시 드래그 안되는 문제', description: 'ccg' },
		],
	},
	{
		title: 'IN PROGRESS',
		cards: [
			{ id: 3, status: 'IN_PROGRESS', title: '코드 리팩터링', description: 'ccg' },
			{ id: 4, status: 'IN_PROGRESS', title: 'UI개선', description: 'abcd1234' },
		],
	},
	{
		title: 'DONE',
		cards: [{ id: 5, status: 'DONE', title: '칸반보드 기능', description: 'ccg' }],
	},
];

export const projectsdummy = [
	{
		title: 'STATIC 개발 스크럼',
		description: 'This application is created to make users life easier',
		color: '#96F2D7',
	},
	{ title: '라이선스 관리 프로그램', description: '백엔드 인턴 프로젝트', color: '#FFD6A5' },
	{ title: 'IOOB 프로젝트', description: '소프트웨어 프로젝트', color: '#74C0FC' },
];

export const recentIssuesdummy: { date?: string; title: string; status: CardStatusType }[] = [
	{ date: '2024-11-14', title: '드래그&드롭 기능 추가', status: 'TODO' },
	{ title: '코드 리팩터링', status: 'IN_PROGRESS' },
	{ title: '보드 순서 변경 기능', status: 'TODO' },
	{ title: '칸반보드 기능', status: 'DONE' },
];
