import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --gray: #12273E;
    --blue-light: #6933FF;
    --green: #33cc95;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;

  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  height: 100vh;
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
