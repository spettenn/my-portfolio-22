import styled, { css } from 'styled-components';

export const SliderContainer = styled.div`
	position: relative;
	background: #fafafa;
	overflow: hidden;
	width: 100%;
	height: 100%;
	height: ${(props) => props.height || '100%'};
`;

export const SliderWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
`;

export const SliderItem = styled.div`
	position: relative;
	height: 100%;
	width: ${(props) => props.width + 'px' || '100%'};
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	font-size: 25px;
`;

export const Navigation = styled.ul`
	position: absolute;
	bottom: 10px;
	margin: 0;
	margin-left: 44%;
	margin-right: 50%;
	padding: 0;
	left: 0;
	display: flex;
	@media (max-width: 700px) {
		margin-left: 12%;
	}
`;

export const NavigationItem = styled.li`
	list-style: none;
	width: 30px;
	height: 4px;
	margin: 0 3px;
	background: transparent;
	border-radius: 0px;
	cursor: pointer;
	border: 1px solid white;
	${(props) =>
		props.active &&
		css`
			background: #355c7d;
		`};
	@media (max-width: 700px) {
		width: 50px;
		height: 10px;
	}
`;

export const Control = styled.div`
	position: absolute;
	width: 40px;
	height: 40px;
	margin: 10px;
	cursor: pointer;
	color: white;
`;

export const ControlLeft = styled(Control)`
	left: 0;
	top: 50%;
`;
export const ControlRight = styled(Control)`
	right: 0;
	top: 50%;
`;

export const BigElement = styled.div`
	min-height: 1000px;
	background: #61dafb;
	width: 30px;
`;
