import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  /*   @font-face {
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
  } */
  display: flex;
  justify-content: center;
  width: 100%;
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
      /* font-family: "MovieDescription"; */
      font-family: "Teko", sans-serif;
      font-optical-sizing: auto;
      font-size: 2rem;
      letter-spacing: 2px;
      padding-top: 10px;
    }
  }
  .mainContainer {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    > .section {
      /* font-family: "LinksFont"; */
      font-family: "Teko", sans-serif;
      font-optical-sizing: auto;
      padding-bottom: 50px;
      width: 100%;
      max-width: 800px;
      > h1 {
        color: #a87d32;
        text-shadow: 0 0 1px #fff;
        letter-spacing: 2px;
        font-size: 4rem;
        font-weight: 400;
        padding: 0 50px;
      }
      .card {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        margin: 20px;
        border-radius: 15px;
        box-shadow: 0 0 10px 10px #fff;
        .cardTop {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          > img {
            margin: 40px 20px 20px 20px;
            border: 2px solid #a87d32;
            max-width: 100%;
            border-radius: 10px;
          }
          > .detailsContainer {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            > p {
              /* font-family: "MovieDescription"; */
              font-family: "Teko", sans-serif;
              font-optical-sizing: auto;
              color: #ddd;
              padding: 10px;
              font-size: 1.5rem;
            }
            .overview {
              background-color: #222;
              color: #ddd;
              margin: 10px 20px 20px 20px;
              padding: 10px;
              border: 2px solid #a87d32;
              border-radius: 10px;
              font-size: 1.5rem;
              max-width: 100%;
              height: 290px;
              overflow: auto;
              scrollbar-width: none;
              scrollbar-color: #a87d32 #bbb;
            }
            .backdrop {
              max-width: 100%;
              margin: 10px 20px 20px 20px;
              border: 2px solid #a87d32;
              border-radius: 10px;
              height: auto;
            }
          }
        }
        .cardMiddle {
          display: flex;
          justify-content: space-around;
          margin: 20px auto;
          max-width: 100%;
          h3 {
            /* font-family: "MovieDescription"; */
            font-family: "Teko", sans-serif;
            font-optical-sizing: auto;
            color: #ddd;
            padding: 10px;
            font-size: 2.5rem;
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
          flex-direction: column;
          justify-content: space-around;
          max-width: 100%;
          margin: 20px;
          line-height: 1.5;
          padding-bottom: 60px;
          .left {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            p {
              /* font-family: "MovieDescription"; */
              font-family: "Teko", sans-serif;
              font-optical-sizing: auto;
              color: #ddd;
              margin: 0;
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
            max-width: 100%;
            margin-top: 40px;
            p {
              /* font-family: "MovieDescription"; */
              font-family: "Teko", sans-serif;
              font-optical-sizing: auto;
              color: #ddd;
              margin: 0;
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }
`;
