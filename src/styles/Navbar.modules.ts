import styled from "styled-components";

export const NavbarContainer = styled.nav`
  max-width: 100vw;
  /* @font-face {
    font-family: "MovieLibrary";
    src: url("src/assets/Corleone.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  } */
  /* @font-face {
    font-family: "LinksFont";
    src: url("src/assets/CorleoneDue.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  } */
  .appBar {
    color: white;
    height: 250px;
    background-image: url("src/assets/navCurtain.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100vw;
    box-shadow: 0 0 10px 5px #fc573a;
    > .toolBar {
      display: flex;
      justify-content: space-between;
      width: 100%;

      /* > .navLogo {
        align-self: center;
        font-family: "MovieLibrary";
        font-size: 4.5rem;
        padding-left: 1vw;
        min-width: 350px;
      } */
      > .navLogo {
        height: 100px;
        width: auto;
      }
      > .navigation {
        display: flex;
        justify-content: end;
        align-items: center;
        width: 100%;
        height: 250px;
        > .navLinks {
          display: flex;
          align-items: flex-start;
          margin: 20px auto;
          height: 100px;
          > .active {
            background-color: #a87d32;
            border-radius: 10px;
          }
          > a {
            text-decoration: none;
            color: #fff;
            > .MuiTab-root {
              /* font-family: "LinksFont"; */
              font-family: "Teko", sans-serif;
              font-optical-sizing: auto;
              font-size: 1.5rem;
              &:hover {
                background-color: #444;
                border-radius: 10px;
              }
            }
          }
        }
        > .navRightBkg {
          width: 150px;
          height: 150px;
          margin: 20px 4vw 0 20px;
          background-image: url("src/assets/popcorn.png");
          background-size: 150px;
          background-repeat: no-repeat;
        }
      }
    }
  }
  @media (max-width: 750px) {
    .appBar > .toolBar > .navLogo {
      font-size: 4rem;
      padding-left: 0;
      min-width: 310px;
    }
    .appBar > .toolBar > .navigation > .navRightBkg {
      width: 120px;
      height: 120px;
      margin: 20px 2vw 0 20px;
      background-size: 120px;
    }
  }
  @media (max-width: 520px) {
    .appBar > .toolBar > .navLogo {
      font-size: 3.5rem;
      padding-left: 0;
      min-width: 270px;
    }
    .appBar > .toolBar > .navigation > .navRightBkg {
      width: 100px;
      height: 100px;
      margin: 20px 2vw 0 0;
      background-size: 100px;
    }
  }
  @media (max-width: 465px) {
    .appBar > .toolBar > .navLogo {
      font-size: 3.5rem;
      padding-left: 0;
      min-width: 270px;
    }
    .appBar > .toolBar > .navigation > .navRightBkg {
      width: 0;
      height: 0;
      margin: 0;
      background-size: 0px;
    }
  }
`;
