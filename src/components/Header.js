import styled from 'styled-components';

const Name = styled.h1`
	width: 326px;
	height: 31px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 25px 0;
	font-weight: bold;
	font-size: 26px;
	line-height: 31px;
	color: #ffffff;
`;

const Back = styled.img`
	width: 25px;
	height: 20px;
	position: fixed;
	left: 20px;
	top: 18px;
	z-index: 10;
	:hover {
		cursor: pointer;
	}
`;

export { Name, Back };
