export type CardStatusType = 'TODO' | 'IN_PROGRESS' | 'COMPLETE';

export const CardStatusMap: Record<CardStatusType, { text: string }> = {
	TODO: { text: '할 일' },
	IN_PROGRESS: { text: '진행 중' },
	COMPLETE: { text: '완료됨' },
};
