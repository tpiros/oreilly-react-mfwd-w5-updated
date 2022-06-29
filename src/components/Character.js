import Image from './Image';

const Character = ({ name, faction, weapon }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Hello, I am {name}!</h1>
      <p className="text-xl py-2">
        I fight for the {faction} and I fight with a {weapon}
      </p>
      <Image name={name} />
    </div>
  );
};

export default Character;
