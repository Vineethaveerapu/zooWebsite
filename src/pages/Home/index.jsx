import BackgroundMedia from "/src/components/BackgroundMedia";

const Home = ({ title }) => {
  return (
    <div>
      <BackgroundMedia video="/src/assets/video1.mp4">
        <h1>{title}</h1>
      </BackgroundMedia>
    </div>
  );
};

export default Home;
