import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    // --Background: #070606;
    --Background: #f4f4f4;
    --white: #fff;
    // --white: #070606;
    --light-gray: #dcdcdc;
    // --link-color: #bdbdbd;
    --link-color: #1E1E1F;
    --green: #2b892e;
    --emerald:rgb(71, 73, 71);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    background-color: var(--Background);
    color: var(--white);
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--link-color);
        border-radius: 0.5rem;
      }

      &-track {
        background: var(--Background);
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .parallax {
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .parallax .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .scroller span {
    display: block;
    margin-right: 5rem;
  }

  .not_complete {
    display: none;
  }

  .complete {
  }
`;
