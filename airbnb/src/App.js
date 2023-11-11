import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Card from "./components/Cards.jsx";
import data from "./data";
function App() {
  const cards = data.map((item) => {
    return (
      <Card
        image={item.coverImg}
        star={item.star}
        location={item.location}
        reviewcount={item.stats.reviewCount}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
