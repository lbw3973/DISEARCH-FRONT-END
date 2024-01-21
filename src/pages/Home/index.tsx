import ContentList from "@/components/ContentList";
import SideBar from "@/components/SidaBar";
import Welcome from "@/components/Welcome";

const Home = () => {
  return (
    <section>
      <Welcome />
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-5 md:gap-0">
        <SideBar />
        <ContentList />
      </div>
    </section>
  );
};

export default Home;
