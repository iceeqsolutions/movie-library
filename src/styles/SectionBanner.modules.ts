import styled from "styled-components";

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
    /* font-family: "MovieDescription"; */
    font-family: "Teko", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-size: 6rem;
    font-style: italic;
    /* letter-spacing: 10px; */
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
