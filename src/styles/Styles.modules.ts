import styled from "styled-components";

export const NavbarContainer = styled.nav`
  .appBar {
    color: white;
    background-color: #333;
    display: flex;
    justify-content: center;

    > .toolBar {
      display: flex;
      //   justify-content: space-between;
      margin-left: auto;
      width: 100%;

      > .navLinks {
        display: flex;
        margin-left: auto;
        width: 75%;
      }
    }
  }
`;
