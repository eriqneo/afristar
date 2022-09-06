
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-full p-6 mx-auto bg-black rounded-sm ">
  <a
    className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg"
    href="/"
  >
    👋
  </a>

  <ul className="flex items-center text-sm font-medium text-amber-400 space-x-2 md:mr-48">
    <li className="hidden lg:block">
      <a className="px-3 py-2 rounded-lg hover:text-blue-400" href="/"> About us </a>
    </li>

    <li><a className="px-3 py-2 rounded-lg hover:text-blue-400" href="/"> Volonteer </a></li>

    <li>
      <a
        className="px-3 py-2 rounded-lg hover:text-blue-400"
        href="/"
        target="_blank"
      >
        Partner with us
      </a>
    </li>
    <li><a className="px-3 py-2 rounded-lg hover:text-blue-400" href="/"> Donate </a></li>
    <li><a className="px-3 py-2 rounded-lg hover:text-blue-400" href="/"> Contact Us </a></li>
  </ul>
</nav>

  )
}
export default Navbar;
