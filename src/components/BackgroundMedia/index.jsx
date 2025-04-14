import styles from "./BackgroundMedia.module.css";

const BackgroundMedia = ({ children, video, image }) => {
  return (
    <div className={styles.backgroundMedia}>
      {image && (
        <img
          className={styles.backgroundMediaImage}
          src={image}
          alt="Background"
        />
      )}
      {video && (
        <video
          className={styles.backgroundMediaVideo}
          src={video}
          autoPlay
          muted
          loop
        />
      )}
      <div className={styles.backgroundMediaContent}>{children}</div>
    </div>
  );
};

export default BackgroundMedia;
