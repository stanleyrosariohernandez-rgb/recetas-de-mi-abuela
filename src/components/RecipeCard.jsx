
function RecipeCard({ recipe, onViewRecipe }) {
  return (
    <article className="recipe-card">

      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-image"
      />

      <div className="recipe-content">

        <span className="recipe-category">
          {recipe.category}
        </span>

        <h3>{recipe.name}</h3>

        <p>{recipe.description}</p>

        <div className="recipe-footer">

          <span>
            🕒 {recipe.time}
          </span>

          <button
            className="recipe-button"
            onClick={() => onViewRecipe(recipe)}
          >
            Ver receta
          </button>

        </div>

      </div>

    </article>
  );
}

export default RecipeCard;
