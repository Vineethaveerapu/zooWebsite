import BackgroundMedia from "/src/components/BackgroundMedia";
import Sidebar from "/src/components/Sidebar";
import getAnimalsByGroup from "/src/data/animals.js";
import FeaturedContent from "/src/components/FeaturedContent";
import Main from "/src/components/Main";

const Page = ({ title, slug }) => {
  const animals = getAnimalsByGroup(slug);

  return (
    <div>
      <BackgroundMedia video="/src/assets/video1.mp4">
        <h1>{title}</h1>
      </BackgroundMedia>

      <Main>
        <Sidebar animals={animals} />
        <FeaturedContent pageName={slug} />
      </Main>
    </div>
  );
};

export default Page;
