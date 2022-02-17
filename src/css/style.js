import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
        * {     
                ul, li, button, input, a{
                        all: unset;
                }
                body{
                          background-color: #8C11BE;
                }
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font-weight: normal;
                vertical-align: baseline;
                font-family: 'Raleway', sans-serif;;
                box-sizing: border-box;
               ::-webkit-scrollbar {
                        width: 8px;
                        border-radius:8px;
                        }
                ::-webkit-scrollbar-track {
	                background: none; 
                        border-radius:8px;
                        }
                ::-webkit-scrollbar-thumb {
                        background: rgb(148, 92, 190, 0.3); 
                        border-radius:8px;
                        }
                ::-webkit-scrollbar-thumb:hover {
                        background: rgb(148, 92, 190, 0.3); 
                        border-radius:8px;
                        }
        }

`;

export { GlobalStyle };
