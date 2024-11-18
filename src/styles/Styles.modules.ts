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
      > .navigation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
              font-family: "LinksFont";
              font-size: 1.5rem;
              &:hover {
                background-color: #444;
                border-radius: 10px;
              }
            }
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
    > h2 {
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

    h3 {
      padding-top: 10px;
      color: #fff;
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
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  .scrollContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px 0 10px 0;
    flex-wrap: nowrap;
    overflow: hidden;
    > .scrollingWrapper {
      display: flex;
      animation: RightToLeft 30s infinite linear alternate;

      > .card {
        flex: 0 0 auto;
        padding: 5px;

        transition: scale 0.5s ease-in-out;
        > img {
          height: 15vw;
          min-height: 300px;
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
            transform: translateX(-100vw);
          }
        }
      }
    }
  }
  .navigationButtons {
    display: flex;
    justify-content: center;
    > button {
      font-family: "MovieDescription";
      font-size: 1.5rem;
      padding: 10px 20px;
      margin: 20px;
      border: none;
      border-radius: 10px;
      background-color: #a87d32;
      color: #fff;
      &:hover {
        cursor: pointer;
        background-color: #6b5716;
      }
    }
    > .btnPrevDisable,
    .btnNextDisable {
      background-color: #444;
      color: #888;
      &:hover {
        cursor: not-allowed;
        background-color: #444;
      }
    }
    > .pageNumber {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "MovieDescription";
      font-size: 1.5rem;
      color: #ddd;
      padding: 0 30px;
    }
  }
`;

export const SectionBannerContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  > .sectionHeader {
    position: absolute;
    z-index: 1;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "MovieDescription";
    font-size: 6rem;
    letter-spacing: 10px;
    text-align: center;
    width: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }
  > .sectionBannerImg {
    width: 70vw;
    max-height: 500px;
    object-fit: cover;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
  }
`;

export const SearchBarContainer = styled.div`
  div:has(> div.searchBar) {
    margin-top: 20px;
  }
  div:has(> div.mainContainer) {
    margin-top: 50px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 300px;
  .searchBar {
    display: flex;
    justify-content: center;
    align-items: center;
    > input {
      font-family: "MovieDescription";
      font-size: 1.5rem;
      padding: 10px;
      width: 300px;
      border: none;
      border-radius: 10px;
      margin-right: 10px;
    }
    > button {
      font-family: "MovieDescription";
      font-size: 1.5rem;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      background-color: #a87d32;
      color: #fff;
      &:hover {
        cursor: pointer;
        background-color: #6b5716;
      }
    }
  }
`;

export const MovieDetailsContainer = styled.div`
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
  .mainContainer {
    display: flex;
    width: 56%;
    flex-direction: column;
    align-items: center;

    .section {
      font-family: "LinksFont";
      padding-bottom: 50px;
      > h1 {
        color: #a87d32;
        text-shadow: 0 0 1px #fff;
        letter-spacing: 2px;
        font-size: 4rem;
        font-weight: 200;
        padding: 20px 50px;
      }
      .card {
        display: flex;
        flex-direction: column;
        margin: 20px;
        border-radius: 15px;
        box-shadow: 0 0 10px 10px #fff;
        .cardTop {
          display: flex;
          > img {
            width: 400px;
            height: 560px;
            margin: 20px 10px 20px 20px;
            border: 2px solid #a87d32;
            border-radius: 10px;
            /* box-shadow: 0 0 10px 10px #fff; */
          }
          > .detailsContainer {
            display: flex;
            flex-direction: column;
            /* margin-left: 20px; */
            > p {
              font-family: "MovieDescription";
              color: #ddd;
              padding: 10px;
              font-size: 1.5rem;
            }
            .overview {
              background-color: #222;
              color: #ddd;
              margin: 10px 20px 20px 10px;
              padding: 10px;
              border: 2px solid #a87d32;
              border-radius: 10px;
              font-size: 1.5rem;
              width: 400px;
              height: 290px;
              overflow: auto;
              scrollbar-width: none;
              scrollbar-color: #a87d32 #bbb;
            }
            .backdrop {
              width: 420px;
              margin: 20px 20px 10px 10px;
              border: 2px solid #a87d32;
              border-radius: 10px;
              height: 225px;
            }
          }
        }
        .cardMiddle {
          display: flex;
          justify-content: space-around;
          h3 {
            font-family: "MovieDescription";
            color: #ddd;
            padding: 10px;
            font-size: 2.2rem;
            .rating {
              border: 4px solid #6b5716;
              border-radius: 50%;
              background-color: #a87d32;
              padding: 10px 12px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
        .cardBottom {
          display: flex;
          justify-content: space-around;
          padding-bottom: 60px;
          .left {
            display: flex;
            flex-direction: column;
            /* padding: 10px;
            h3 {
              font-family: "MovieDescription";
              color: #ddd;
              padding: 10px;
              font-size: 2.2rem;
            } */
            p {
              font-family: "MovieDescription";
              color: #ddd;
              margin: 0;
              /* padding: 10px; */
              font-size: 1.5rem;
              a {
                color: #a87d32;
                text-decoration: none;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            /* padding: 10px;
            h3 {
              font-family: "MovieDescription";
              color: #ddd;
              padding: 10px;
              font-size: 2.2rem;
            } */
            p {
              font-family: "MovieDescription";
              color: #ddd;
              margin: 0;
              /* padding: 10px; */
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }
`;
