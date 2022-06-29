import { Link } from 'react-router-dom';
const navItems = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/characters',
    text: 'Character List',
  },
  {
    to: '/search',
    text: 'Search',
  },
  {
    to: '/about',
    text: 'About',
  },
];
const Nav = () => (
  <nav className="flex flex-col text-gray-900 text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
    <div className="mb-2 sm:mb-0">
      <Link to="/" className="text-lg no-underline">
        SWCDB (Star Wars Character Database)
      </Link>
    </div>
    <div>
      {navItems.map((navItem) => (
        <Link
          key={navItem.to}
          to={navItem.to}
          className="text-lg no-underline ml-2 hover:text-red-900 hover:underline"
        >
          {navItem.text}
        </Link>
      ))}
    </div>
  </nav>
);

export default Nav;
