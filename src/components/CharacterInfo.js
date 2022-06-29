import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Character from './Character';

const CharacterList = () => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const res = await fetch(
        `https://adoring-lichterman-bc18a2.netlify.app/.netlify/functions/sw`
      );
      const json = await res.json();
      const [data] = json.filter((el) => el.id === parseInt(id, 10));
      setCharacter(data);
      setLoading(false);
    }
    getData();
  }, [id]);
  return (
    <div>
      {!loading ? (
        <Character
          name={character.name}
          faction={character.faction}
          weapon={character.weapon}
        />
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default CharacterList;
