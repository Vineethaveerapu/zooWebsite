import styles from "./Footer.module.css";

import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  Phone,
  Envelope
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 ZooWebsite. All rights reserved.</p>

      <div className={styles.quickLinks}>
        <p>Quick Links</p>
      </div>

      <div className={styles.socialMedia}>
        Contact us: info@zoowebsite.com
        <div className={styles.socialMediaIcons}>
          <Phone size={32} />
          <Envelope size={32} />
        </div>
      </div>
      <div className={styles.socialMedia}>
        Follow us on social media!
        <div className={styles.socialMediaIcons}>
          <FacebookLogo size={32} />
          <InstagramLogo size={32} />
          <TwitterLogo size={32} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
