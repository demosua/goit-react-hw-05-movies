const CastInfo = ({ credits }) => {
  const actors = credits.cast.filter(actor => actor.known_for_department
 === "Acting");
 console.log(actors[0]);
  return (

    <div>
        <ul>
          {actors.map(actor => 
            <li key ={actor.id}>
              {actor.name}
              {actor.character}
              {actor.profile_path
              ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`} alt={actor.name} width={40}/>
              : <img src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg
              `} alt={actor.name} width={40}/>}
            </li>
          )}
        </ul>
    </div>
 
  );
};

export default CastInfo;