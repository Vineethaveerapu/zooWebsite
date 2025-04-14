import BackgroundMedia from "/src/components/BackgroundMedia";

const Birds = ({ title }) => {
  return (
    <div>
      <div>
        <BackgroundMedia
          video="/src/assets/video1.mp4"
          image="/src/assets/lizard.png"
        >
          <h1>{title}</h1>
        </BackgroundMedia>
      </div>
    </div>
  );
};

export default Birds;
