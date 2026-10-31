
import { useState } from "react";

import Header from "./components/header";
import Hero from "./components/hero";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";

import recipes from "./data/recipes";

function App() {

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function handleViewRecipe(recipe) {
    setSelectedRecipe(recipe);
  }

  function handleCloseRecipe() {
    setSelectedRecipe(null);
  }

  return (
    <div>

      <Header />

      <Hero />

      <main>

        <section className="recipes-section" id="recetas">

          <div className="section-heading">

            <span className="section-label">
              NUESTRA COCINA
            </span>

            <h2>Recetas con historia</h2>

            <p>
              Descubre los sabores que han acompañado
              a nuestra familia durante generaciones.
            </p>

          </div>

          <div className="recipes-grid">

            {recipes.map((recipe) => (

              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onViewRecipe={handleViewRecipe}
              />

            ))}

          </div>

        </section>

        <section className="story-section" id="historia">

          <h2>Una tradición que vive en cada plato</h2>

          <p>
            Este recetario nace del cariño por nuestra
            abuela y de la intención de conservar las
            recetas que forman parte de nuestra historia.

            Cada preparación representa un recuerdo,
            una reunión familiar y una parte de
            nuestra cultura dominicana.
          </p>

        </section>

      </main>

      <footer className="footer">

        <p>
          Recetas de mi abuela
        </p>

        <p>
          San Juan, República Dominicana
        </p>

        <p>
          © 2026 - Preservando nuestra tradición culinaria
        </p>

      </footer>

      <RecipeDetails
        recipe={selectedRecipe}
        onClose={handleCloseRecipe}
      />

    </div>
  );
}

export default App;

