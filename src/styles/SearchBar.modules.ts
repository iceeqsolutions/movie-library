import styled from "styled-components";

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
      /* font-family: "MovieDescription"; */
      font-family: "Teko", sans-serif;
      font-optical-sizing: auto;
      font-size: 1.5rem;
      padding: 10px;
      width: 300px;
      border: none;
      border-radius: 10px;
      margin-right: 10px;
    }
    > button {
      /* font-family: "MovieDescription"; */
      font-family: "Teko", sans-serif;
      font-optical-sizing: auto;
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
