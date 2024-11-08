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
    box-shadow: 0 0 10px 5px #fc573a;
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
  @font-face {
    font-family: "ApiDataRecord";
    src: url("src/assets/GomariceCurryBread.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "MovieDescription";
    src: url("src/assets/AshemarkRegular.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
  }
  display: flex;
  justify-content: center;
  margin-top: 270px;
  background-color: #111;
  border-radius: 10px;
  .loadingCircle {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #fff;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(3, 40, 65, 0.4);
    > p {
      font-family: "MovieDescription";
      font-size: 2rem;
      letter-spacing: 2px;
      padding-top: 10px;
    }
  }
  .section {
    font-family: "LinksFont";
    padding-bottom: 50px;
    > h1 {
      color: #a87d32;
      text-shadow: 0 0 1px #fff;
      letter-spacing: 2px;
      font-size: 2.4rem;
      font-weight: 200;
      padding: 20px 50px;
    }
  }
  .recordCard {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .recordCardItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px;
    padding: 20px 10px;
    border-radius: 15px;
    box-shadow: 0 0 10px 5px #222;
    background-color: #333;
    width: 290px;
    transition: all 0.5s ease-in-out;
    img {
      width: 250px;
      height: 350px;
      margin-top: 10px;
      border-radius: 10px;
      box-shadow: 0 0 10px 10px #fff;
    }

    h2 {
      padding-top: 10px;
      color: #fff;
      /* ApiDataRecord doesn't support ellipsis, therefore removed */
      /* font-family: "ApiDataRecord"; */
      letter-spacing: 1px;
      font-size: 1.7rem;
      font-weight: 400;
      width: 250px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      font-family: "MovieDescription";
      color: #ddd;
      padding: 10px;
      font-size: 1.5rem;
    }
    .overview {
      background-color: #222;
      color: #ddd;
      margin: 10px;
      padding: 10px;
      border: 4px solid #a87d32;
      border-radius: 10px;
      font-size: 1.5rem;
      height: 10rem;
      overflow: auto;
      scrollbar-width: none;
      scrollbar-color: #a87d32 #bbb;
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
  .rating {
    border: 4px solid #6b5716;
    border-radius: 50%;
    background-color: #a87d32;
    padding: 10px 12px;
    color: #fff;
    font-weight: 600;
  }
  .mainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .scrollContainer {
    display: flex;
    width: 100vw;
    margin-top: 20px;
    flex-wrap: nowrap;
    overflow: hidden;
    > .scrollingWrapper {
      display: flex;
      animation: RightToLeft 60s infinite linear;

      > .card {
        flex: 0 0 auto;
        padding: 5px;

        transition: scale 0.5s ease-in-out;
        > img {
          height: 400px;
          border: 2px solid #a87d32;
          border-radius: 10px;
          &:hover {
            cursor: pointer;
            transform: scale(1.05);
          }
        }
        @keyframes RightToLeft {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-70vw);
          }
        }
      }
    }
  }
`;
