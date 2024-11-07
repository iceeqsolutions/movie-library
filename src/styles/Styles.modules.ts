import styled from "styled-components";

export const NavbarContainer = styled.nav`
  max-width: 100vw;
  @font-face {
    font-family: "MovieLibrary";
    src: url("src/assets/Corleone.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "LinksFont";
    src: url("src/assets/CorleoneDue.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  .appBar {
    color: white;
    height: 250px;
    background-image: url("src/assets/navCurtain.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100vw;
    > .toolBar {
      display: flex;
      justify-content: space-between;
      width: 100%;

      > .navLogo {
        align-self: center;
        font-family: "MovieLibrary";
        font-size: 4.5rem;
        padding-left: 50px;
        min-width: 350px;
      }

      > .navLinks {
        display: flex;
        align-items: flex-start;
        margin: 20px auto;
        height: 200px;

        > .MuiTab-root {
          font-family: "LinksFont";
          font-size: 1.5rem;
          &:hover {
            background-color: #444;
            border-radius: 10px;
          }
        }
      }
      > .navRightBkg {
        width: 150px;
        height: 150px;
        margin: 20px 100px 0 20px;
        background-image: url("src/assets/popcorn.png");
        background-size: 150px;
        background-repeat: no-repeat;
      }
    }
  }
`;

export const ApiDataItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 300px;
  background-color: #f5f5f5;
  border-radius: 10px;
  .loadingCircle {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    align-items: center;
    margin-top: 100px;
    font-size: 2rem;
  }
`;
