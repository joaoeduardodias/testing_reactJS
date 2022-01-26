import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body {
  -webkit-font-smoothing: antialiased;
}
@media(max-width: 1080px){
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
body, input, textarea, select, button {
  font: 400 1rem 'Poppins',sans-serif ;
}
button {
  cursor: pointer;
  border: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
`;
