import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
html{
    font-size: 62.5%;

}
h1{
    font-size: 6rem;
    font-weight:700;
    color:${(theme) => theme.colors.heading};
}
h2{
    font-size: 4.4rem;
    font-weight:300;
    white-space:normal;
    text-align:center;
    color:${(theme) => theme.colors.heading};
}
h3{
    font-size:1.8rem;
    font-weight:400;
}
p{
    opacity:0.7;
    font-size:1.65rem;
    line-height:1.5;
    margin-top:1 rem;
    font-weight:400;
    color:${(theme) => theme.colors.text};
}
a{
    text-decoration:none;
}
li{
    list-style:none;
}

`;
