import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import back from '../image/back.jpg';

export const GlobalStyle = createGlobalStyle`
body { 
  margin: 0;;
  background: url(${back}) no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,h2,h3,h4,h4,h5{
  margin: 0;
}

ul,
ol {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

p{
  margin: 0;
  color:#fff;
}

button {
  cursor: pointer;
}
`;
