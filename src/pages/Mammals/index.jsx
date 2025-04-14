import BackgroundMedia from "/src/components/BackgroundMedia";

const Mammals = ({ title }) => {
  return (
    <div>
      <BackgroundMedia
        video="/src/assets/video1.mp4"
        image="/src/assets/lizard.png"
      >
        <h1>{title}</h1>
      </BackgroundMedia>
    </div>
  );
};

export default Mammals;
