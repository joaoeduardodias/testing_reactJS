import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --orange: #E88B00;
    --gray: #12273E;
    --blue: #0534F0;
    --blue-light: #6933FF;
    --green: #33cc95;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
    --shadow: #78ABFF70;
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
.react-modal-overlay {
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    @media(max-width:425px){
      width: 90%;
    }
    @media(max-width:375px){
      padding: 1.5rem;
    }
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

  }
`;
