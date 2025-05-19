import CardStatus from '@/components/CardStatus';
import IconButton from '@/components/common/IconButton';
import Tag from '@/components/common/Tag';
import { projectsdummy, recentIssuesdummy } from '@/datas/dummyData';
import styled from '@emotion/styled';

function ProjectListPage() {
	return (
		<DashboardLayout>
			<PageTitle>내 작업</PageTitle>

			<Section>
				<SectionHeader>
					<SectionTitle>최근 프로젝트</SectionTitle>
					<IconButton type="normal" iconName="IcnPlus" />
				</SectionHeader>
				<ProjectListContainer>
					{projectsdummy.map((project, i) => (
						<ProjectWrapper key={i}>
							<ProjectItem>
								<ProjectColorWrapper>
									<ProjectColor style={{ background: project.color }} />
								</ProjectColorWrapper>
								<ProjectInfoConatiner>
									<Tag name="tag" />
									<ProjectIntoTitle>{project.title}</ProjectIntoTitle>
									<ProjectInfoDesc>{project.description}</ProjectInfoDesc>
								</ProjectInfoConatiner>
								<IconBtnWrapper>
									<IconButton type="normal" iconName="IcnPlus" />
								</IconBtnWrapper>
							</ProjectItem>
						</ProjectWrapper>
					))}
				</ProjectListContainer>
			</Section>

			<Section>
				<SectionHeader>
					<SectionTitle>최근 작업</SectionTitle>
				</SectionHeader>
				<IssueListContainer>
					{recentIssuesdummy.map((issue, i) => (
						<IssueItem key={i}>
							<IssueTextContainer>
								{issue.date && <IssueDate>{issue.date}</IssueDate>}
								<IssueTitle>{issue.title}</IssueTitle>
								<IssueTag>IOOB 프로젝트</IssueTag>
							</IssueTextContainer>
							<CardStatus status={issue.status} />
						</IssueItem>
					))}
				</IssueListContainer>
			</Section>
		</DashboardLayout>
	);
}

export default ProjectListPage;

const ProjectWrapper = styled.div`
	display: flex;
	width: 319.5px;
	height: 18rem;
	flex-direction: column;
	align-items: center;
	border-radius: 12px;
	background: #fff;
	box-shadow:
		0px 1.5px 4.5px rgba(16, 24, 40, 0.1),
		0px 1.5px 3px rgba(16, 24, 40, 0.06);
`;

const ProjectItem = styled.div`
	height: 100%;
	display: flex;
	padding: 12px 0px 24px 0px;
	align-items: flex-start;
	gap: 12px;
	align-self: stretch;

	cursor: pointer;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
	}
`;

const ProjectColorWrapper = styled.div`
	display: flex;
	width: 36px;
	padding: 12px;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	gap: 12px;
	align-self: stretch;
`;

const ProjectColor = styled.div`
	width: 6px;
	height: 114px;
	flex-shrink: 0;
	border-radius: 1.5px;
	background: var(--teal-vivid-teal-vivid-100, #c6f7e9);
`;

const ProjectInfoConatiner = styled.div`
	display: flex;
	padding-top: 12px;
	flex-direction: column;
	align-items: flex-start;
	gap: 12px;
	flex: 1 0 0;
	align-self: stretch;
`;

const ProjectIntoTitle = styled.p`
	color: var(--Blue-Grey-Blue-Grey-800, #243b53);
	font-family: Inter;
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	line-height: 27px;
`;

const ProjectInfoDesc = styled.p`
	color: var(--Blue-Grey-Blue-Grey-600, #486581);
	font-family: Inter;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 27px;

	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const IconBtnWrapper = styled.div`
	display: flex;
	width: 36px;
	height: 36px;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 1rem;
`;

const DashboardLayout = styled.div`
	width: 100%;
	padding: 4rem 6rem;
	box-sizing: border-box;
	background-color: #f9fbfd;
	display: flex;
	flex-direction: column;
	gap: 4rem;
`;

const PageTitle = styled.h1`
	font-size: 3.2rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.title};
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

const SectionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SectionTitle = styled.h2`
	font-size: 2rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.title};
`;

const ProjectListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
`;

const IssueListContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

const IssueItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.6rem 2rem;
	background-color: #ffffff;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 1.2rem;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
	cursor: pointer;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
	}
`;

const IssueTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const IssueDate = styled.span`
	font-size: 1.2rem;
	color: ${({ theme }) => theme.colors.secondaryText};
`;

const IssueTitle = styled.span`
	font-size: 1.6rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.title};
`;

const IssueTag = styled.span`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.secondaryText};
`;
