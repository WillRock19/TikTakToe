import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif;
        font-size: 100%;
    }
    #root{
        margin:0 auto;
    }
    h1{
        color: red;
    }
 `;
