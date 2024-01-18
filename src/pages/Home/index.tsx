import CategoryAndTag from "@/components/CategoryAndTag";
import ContentList from "@/components/ContentList";
import Welcome from "@/components/Welcome";

const Home = () => {
  return (
    <section>
      <Welcome />
      <CategoryAndTag />
      <ContentList />
    </section>
  );
};

export default Home;
