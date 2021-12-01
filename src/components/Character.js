import { useFavourites, useFavUpdate } from './FavProvider'

function Character({ character }) {

  const favCharacter = useFavourites();
  const toggleFavCharacter = useFavUpdate();

  let imageSrc = "https://picsum.photos/300/200/?blur";
  if (character.imageUrl) {
    // API seems to include extra path for images so here we strip it off to fetch raw image
    imageSrc = character.imageUrl.substring(0, character.imageUrl.indexOf('/revision'));
  }

  return (
    <article className="character-item">

      <h2>{character.name}</h2>
      <div className="character-item__actions"
        onClick={() => { toggleFavCharacter(character) }}>
        {!favCharacter.includes(character) ? "Add to Favourites" : "Your Favourite character"}
      </div>
      <img className="character-item__img" src={imageSrc} alt={character.name} />

    </article>
  )
}

export default Character;