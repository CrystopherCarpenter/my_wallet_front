import styled from 'styled-components';

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 24px;
	& img {
		:hover {
			cursor: pointer;
		}
	}
`;

const None = styled.p`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	line-height: 23px;
	text-align: center;
	color: #868686;
`;

const Name = styled.h1`
	font-weight: bold;
	font-size: 26px;
	line-height: 31px;
	color: #ffffff;
`;

const Container = styled.div`
	height: calc(100vh - (221px));
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin: 24px 24px 13px 24px;
	background-color: #ffffff;
	border-radius: 5px;
	padding: 23px 12px;
	position: relative;
	overflow: scroll;
`;

const Data = styled.div`
	display: flex;
	width: calc(100vw - 72px);
	margin-bottom: 25px;
`;

const Day = styled.span`
	font-size: 16px;
	line-height: 19px;
	color: #c6c6c6;
	margin-right: 12px;
`;

const Description = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Text = styled.p`
	font-size: 16px;
	line-height: 19px;
	color: #000000;
`;

const Value = styled.p`
	font-size: 16px;
	line-height: 19px;
	text-align: right;
	color: ${(props) => (props.type === 'income' ? `#03AC00` : `#C70000`)};
`;

const Balance = styled.div`
	width: calc(100vw - 48px);
	height: 40px;
	display: flex;
	justify-content: space-between;
	border-radius: 0 0 5px 5px;
	position: fixed;
	bottom: 140px;
	left: 24px;
	z-index: 10;
	padding: 10px 11px 0 15px;
	background-color: #ffffff;
	& span {
		font-weight: bold;
		font-size: 17px;
		color: #000000;
	}
`;

const Buttons = styled.div`
	display: flex;
	column-gap: 15px;
	margin: 13px 24px;
`;

const Button = styled.button`
	width: calc((100vw - 63px) / 2);
	height: 114px;
	background-color: #a328d6;
	border-radius: 5px;
	position: relative;
	:hover {
		cursor: pointer;
	}
	& span {
		display: flex;
		width: 64px;
		font-weight: bold;
		font-size: 17px;
		line-height: 20px;
		color: #ffffff;
		margin-top: 58px;
		margin-left: 10px;
	}
`;

const Icon = styled.img`
	position: absolute;
	top: 11px;
	left: 10px;
`;

const Icons = styled.img`
	align-self: center;
	height: 15px;
	margin-left: 15px;
	:hover {
		cursor: pointer;
	}
`;

export {
	Header,
	Name,
	Container,
	Data,
	Day,
	Description,
	Text,
	Value,
	Balance,
	Buttons,
	Button,
	Icon,
	None,
	Icons,
};
