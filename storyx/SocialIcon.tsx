import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp, IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import styled from "styled-components";

type socials = "whatsapp" | "facebook" | "twitter" | "instagram";

export interface SocialIconProps {
  social?: socials;
  [props: string]: any;
}

export const Whatsapp = styled(IoLogoWhatsapp)`
  font-size: 1.8rem;
  color: #4caf50;
`;
export const Facebook = styled(FaFacebook)`
  font-size: 1.8rem;
  color: #3b5998;
`;
export const Twitter = styled(IoLogoTwitter)`
  font-size: 1.8rem;
  color: #03a9f4;
`;
export const Instagram = styled(AiFillInstagram)`
  font-size: 1.8rem;
  color: #f95146;
`;

const SocialIcon = ({ social, props }: SocialIconProps) => {
  if (social === "facebook") return <Facebook {...props} />;
  else if (social === "whatsapp") return <Whatsapp {...props} />;
  else if (social === "instagram") return <Instagram {...props} />;
  return <Twitter {...props} />;
};

export default SocialIcon;

//facebook: #3B5998
//twitter: #03A9F4
//whatsapp: #4CAF50
//instagram: #4E5BC9 #F95146 #FF9E49
