import ContentList from "@/components/ContentList";
import SideBar from "@/components/SidaBar";
import Welcome from "@/components/Welcome";

const Home = () => {
  return (
    <section>
      <Welcome />
      <div className="grid grid-cols-[300px_1fr]">
        <SideBar />
        <ContentList />
      </div>
    </section>
  );
};

export default Home;
