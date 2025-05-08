import { CardStatusType } from '@/types/Card';

export type CardType = {
	status: CardStatusType;
	title: string;
	description: string;
	assignee?: string;
};

export type BoardType = {
	title: string;
	cards: CardType[];
};
