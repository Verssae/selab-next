import styled from "@emotion/styled";
import theme from "../theme";
import ContentLoader from "react-content-loader";

export const All = styled.div`
	background-color: ${theme.COLORS.sapphire};
	/* margin-top: 10%;
  margin-bottom: 10%; */
	display: flex;
	justify-content: center;
	margin-top: 90px;
`;
export const BigTitle = styled.p`
	color: ${theme.COLORS.vanila};
	margin: 30px 10px;
	padding: 0 30px 0 0;
	font-size: 13pt;
	font-weight: bold;
`;

export const Outline = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	width: 1050px;
	height: 590px;
	font-size: 13pt;
	border-left: solid ${theme.COLORS.vanila};
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;
export const Top = styled.div`
	font-weight: bold;
	margin-bottom: 3%;
	& div > div > div div {
		margin: 0;
		padding: 0;
		border-bottom: solid;
	}
`;

export const Bottom = styled.div`
	margin-bottom: 3%;
	margin-left: 1%;
	margin-right: 1%;
	font-size: 12pt;
	&:hover {
		background-color: ${theme.COLORS.vanila};
		color: black;
		border-radius: 15px;
		font-weight: bold;
	}
`;

export const Middle = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 1%;
`;
export const In = styled.div`
	display: flex;
	margin: 0;
	justify-content: center;
`;
export const Title = styled.div`
	width: 30%;
`;
export const Name = styled.div`
	width: 20%;
`;
export const Date = styled.div`
	width: 15%;
`;

export const Loader = () => (
	<ContentLoader
		height={475}
		width={250}
		speed={2}
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
	>
		<rect x="0" y="70" rx="5" ry="5" width="250" height="180" />
		<rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
		<rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
	</ContentLoader>
);
