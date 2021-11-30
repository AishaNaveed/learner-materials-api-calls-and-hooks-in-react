function Character({ character, favCharacter, updateFavorites }) {

  let imageSrc = "https://picsum.photos/300/200/?blur";
  if (character.imageUrl) {
    // API seems to include extra path for images so here we strip it off to fetch raw image
    imageSrc = character.imageUrl.substring(0, character.imageUrl.indexOf('/revision'));
  }

  function toggleFavouriteForCharacter(characterId) {
    if(!favCharacter.includes(characterId)) {
        // add to favourites
        updateFavorites([...favCharacter, characterId]);
    }
    else {
      // remove from favourites
      const updatedFavourites = favCharacter.filter((id) => id !== characterId);
      updateFavorites(updatedFavourites);
    }
  }
  
  return (
    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions" onClick={()=>toggleFavouriteForCharacter(character._id)}>
        {!favCharacter.includes(character._id) ? "Add to Favourites" : "Favourited"}
      </div>

      <img className="character-item__img" src={imageSrc} alt={character.name} />

    </article>
  )
}

export default Character