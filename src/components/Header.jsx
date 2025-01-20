function Header() {
  return (
    <header className="bg-sky-200 py-4 nunito-font">
      <nav className="container mx-auto flex justify-between items-center flex-wrap ">
        <div className="logo text-3xl font-bold">My Portfolio</div>
        <ul className="flex items-center">
          <li className="mr-6">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 text-xl font-medium"
            >
              About
            </a>
          </li>
          <li className="mr-6">
            <a
              href="/portfolio"
              className="text-gray-700 hover:text-gray-900 text-xl font-medium"
            >
              Portfolio
            </a>
          </li>
          <li className="mr-6">
            <a
              href="/contact"
              className="text-gray-700 hover:text-gray-900 text-xl font-medium"
            >
              Contact
            </a>
          </li>
          <li className="mr-6">
            <a
              href="/resume"
              className="text-gray-700 hover:text-gray-900 text-xl font-medium"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
