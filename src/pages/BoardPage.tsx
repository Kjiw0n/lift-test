import { useState } from 'react';
import styled from '@emotion/styled';

import { BoardType } from '@/types/Board';
import { CardType } from '@/types/Card';

import { dummyBoards } from '@/datas/dummyData';

import CardStatus from '@/components/CardStatus';
import IconButton from '@/components/common/IconButton';
import AIChatModal from '@/components/AIChatModal';
import CardDetailModal from '@/components/CardDetailModal';

type Props = {
	boards?: BoardType[];
};

const BoardPage = ({ boards = dummyBoards }: Props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAIModalOpen, setIsAIModalOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState<CardType | null>(null);

	const openModal = (card: CardType) => {
		setSelectedCard(card);
		setIsModalOpen(true);
	};

	const closeDetailModal = () => {
		setSelectedCard(null);
		setIsModalOpen(false);
	};

	const openAIChatModal = () => {
		setIsAIModalOpen(true);
	};

	const closeAIChatModal = () => {
		setIsAIModalOpen(false);
	};

	return (
		<BoardPageLayout>
			<BoardPageHeader>
				<BoardPageTitle>IOOB 프로젝트</BoardPageTitle>
				<IconButton type="normal" iconName="IcnPlus" size="big" onClick={openAIChatModal} />
			</BoardPageHeader>
			<BoardContainer>
				{boards.map((board, i) => (
					<BoardItem key={i}>
						<BoardHeader>
							<BoardTitle>{board.title}</BoardTitle>
							<IconButton type="normal" iconName="IcnPlus" />
						</BoardHeader>
						<CardListContainer>
							{(board.cards ?? []).map((card, idx) => (
								<CardItem key={idx} onClick={() => openModal(card)}>
									<CardStatus status={card.status} />
									<CardTitle>{card.title}</CardTitle>
									<CardDescription>{card.description}</CardDescription>
								</CardItem>
							))}
						</CardListContainer>
					</BoardItem>
				))}
			</BoardContainer>

			{/* CardDetailModal */}
			{isModalOpen && selectedCard && <CardDetailModal onClose={closeDetailModal} card={selectedCard} />}

			{/* AIChatModal */}
			{isAIModalOpen && <AIChatModal onClose={closeAIChatModal} />}
		</BoardPageLayout>
	);
};

export default BoardPage;

const BoardPageLayout = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	padding: 4rem 6rem;
	box-sizing: border-box;
	gap: 4rem;
`;

const BoardPageHeader = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: space-between;
	align-items: center;

	flex-shrink: 0;
`;

const BoardPageTitle = styled.p`
	font-size: 4rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.title};
`;

const BoardContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	gap: 20px;
`;

const BoardItem = styled.div`
	width: fit-content;
	min-width: 40rem;
	height: 80rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	border: 2px solid ${({ theme }) => theme.colors.border};
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.boardBackground};

	overflow: hidden;

	padding: 0 0 5rem 0;
`;

const BoardHeader = styled.div`
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-top: 1rem;
	box-sizing: border-box;
	padding: 2rem;
`;

const BoardTitle = styled.p`
	font-size: 2rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.title};
`;

const CardListContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	flex-shrink: 0;

	gap: 1rem;
	box-sizing: border-box;
	padding: 2rem;

	overflow: hidden;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none; /* 크롬, 사파리, 엣지 */
	}
`;

const CardItem = styled.div`
	width: 34rem;
	height: 14rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	border: 2px solid ${({ theme }) => theme.colors.border};
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.cardBackground};
	box-shadow: 0 4px 8px ${({ theme }) => theme.colors.shadow};

	box-sizing: border-box;
	padding: 2rem;

	gap: 1.5rem;
`;

const CardTitle = styled.p`
	font-size: 2rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.title};
`;

const CardDescription = styled.p`
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 2.4rem;
	color: ${({ theme }) => theme.colors.secondaryText};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
