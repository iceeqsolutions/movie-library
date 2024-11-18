import { FootnoteContainer } from "../styles/Styles.modules";
import icsLogo from "../assets/iCeeqSolutionsLogo.png";

const Footnote = () => {
  return (
    <FootnoteContainer>
      <div className="ics-container">
        <p className="ics-p">React/TypeScript demo by:</p>
        <a href="https://iceeqsolutions.fi" target="_blank">
          <img src={icsLogo} alt="Company logo" className="icsLogo" />
        </a>
      </div>
    </FootnoteContainer>
  );
};

export default Footnote;
