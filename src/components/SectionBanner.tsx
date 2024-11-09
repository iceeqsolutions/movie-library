import { SectionBannerProps } from "../interfaces/SectionBannerInterface";
import { SectionBannerContainer } from "../styles/Styles.modules";

const SectionBanner: React.FC<SectionBannerProps> = ({
  imgSrc,
  sectionHeader,
}) => {
  return (
    <SectionBannerContainer>
      <h2 className="sectionHeader">{sectionHeader}</h2>
      <img className="sectionBannerImg" src={imgSrc} alt="" />
    </SectionBannerContainer>
  );
};

export default SectionBanner;
