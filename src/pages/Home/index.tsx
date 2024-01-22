import ContentList from "@/components/ContentList";
import ScrollToTop from "@/components/ScrollToTop";
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
      <ScrollToTop />
    </section>
  );
};

export default Home;
