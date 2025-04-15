import styles from "./Footer.module.css";
import Navigation from "../Navigation";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  Phone,
  Envelope
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>CONTACT US</div>
          <div>ABOUT </div>
          <div>PRIVACY POLICY</div>
          <div>CAREERS</div>
          <div>LOCATION</div>
        </div>

        <div className={styles.socialMediaIcons}>
          <FacebookLogo size={32} />
          <InstagramLogo size={32} />
          <TwitterLogo size={32} />
          <Phone size={32} />
          <Envelope size={32} />
        </div>

        <p className={styles.footerText}>
          &copy; 2025 ZooWebsite. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
