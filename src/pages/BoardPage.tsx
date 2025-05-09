import { BoardType } from '@/types/Board';
import CardStatus from '@/components/CardStatus';
import IconButton from '@/components/common/IconButton';
import styled from '@emotion/styled';
import { dummyBoards } from '@/datas/dummyData';

type Props = {
	boards?: BoardType[];
};

const BoardPage = ({ boards = dummyBoards }: Props) => {
	return (
		<BoardPageLayout>
			<BoardPageHeader>
				<BoardPageTitle>Board</BoardPageTitle>
				<IconButton type="normal" iconName="IcnPlus" size="big" />
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
								<CardItem key={idx}>
									<CardStatus status={card.status} />
									<CardTitle>{card.title}</CardTitle>
									<CardDescription>{card.description}</CardDescription>
								</CardItem>
							))}
						</CardListContainer>
					</BoardItem>
				))}
			</BoardContainer>
		</BoardPageLayout>
	);
};

export default BoardPage;

const BoardPageLayout = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const BoardPageHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const BoardPageTitle = styled.p`
	font-size: 4rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.title};
`;

const BoardContainer = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	justify-content: space-around;
	align-items: center;

	gap: 20px;
`;

const BoardItem = styled.div`
	width: fit-content;
	min-width: 40rem;
	height: 90rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	border: 2px solid ${({ theme }) => theme.colors.border};
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.boardBackground};
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
	gap: 1rem;
	box-sizing: border-box;
	padding: 2rem;

	overflow: hidden;
	overflow-y: scroll;
`;

const CardItem = styled.div`
	width: 34rem;
	height: 16rem;
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
