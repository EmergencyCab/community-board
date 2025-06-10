import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Food Truck Favorites 🍔</h1>
      <h2>Explore local cuisines from around the world!</h2>

      <div className="card-grid">
        {/* Cards will go here */}
        <Card
          name="Birria-Landia"
          cuisine="Mexican"
          image="src/images/Birria_landa.jpg"
          link="https://birrialandia.com/"
        />
        <Card
          name="Mysttik Masala"
          cuisine="Indian"
          image="src/images/Mystikk_Masala.jpg"
          link="https://www.hfbrandsandmarkets.com/mysttik-masaala#:~:text=Mysttik%20Masaala:%20Authentic%20Indian%20Street,food%20experience%20in%20Midtown%20Manhattan."
        />
        <Card
          name="The Halal Guys"
          cuisine="Middle Eastern"
          image="src/images/Halal_guys.webp"
          link="https://thehalalguys.com/"
        />
        <Card
          name="Waffle Mama"
          cuisine="Belgian"
          image="src/images/Waffle_Mama.jpg"
          link="https://wafflemamastruck.com/"
        />
        <Card
          name="Sushi Rollin'"
          cuisine="Japanese"
          image="src/Images/Sushi_Rollin.png"
          link="https://sushirollintx.com/"
        />
        <Card
          name="Grill Masterz"
          cuisine="BBQ"
          image="src/Images/Grill_Masterz.avif"
          link="https://grillzmasters.com/"
        />
        <Card
          name="Falafel Bros"
          cuisine="Mediterranean"
          image="src/Images/Falafel_Bros.jpg"
          link="https://www.falafelbrothers.jp/"
        />
        <Card
          name="Crepe Corner"
          cuisine="French"
          image="src/Images/Crepe_Corner.png"
          link="https://crepecornerri.com/"
        />
        <Card
          name="Vegan Vibes"
          cuisine="Vegan"
          image="src/Images/Vegan_Vibes.svg"
          link="https://www.veganevibes.com/"
        />
        <Card
          name="Banh Mi Express"
          cuisine="Vietnamese"
          image="src/Images/Banh_Mi.jpg"
          link="https://www.banhmi-express.com/"
        />
      </div>
    </div>
  );
}

export default App;
