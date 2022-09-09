
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-full p-6 mx-auto bg-black rounded-sm " id='home'>
  <a
    className="inline-flex items-center justify-center rounded-lg"
    href="/"
  >
    <img src="/afrilogo.png" alt="logo" className='w-1/5 rounded-sm hover:scale-110 object-cover' />
  </a>

  <ul className="flex items-center text-md font-medium text-amber-400 space-x-2 md:mr-48">
    <li className="hidden lg:block">
      <a className="px-3 py-2 rounded-lg hover:text-blue-400" href="#about"> About us </a>
    </li>

    <li><a className="px-3 py-2 rounded-lg hover:text-blue-400" href="#vol"> Volonteer </a></li>

    <li>
      <a
        className="px-3 py-2 rounded-lg hover:text-blue-400"
        href="#vol"
      >
        Partner with us
      </a>
    </li>
    <li><a className="px-3 py-2 rounded-lg hover:text-blue-400" href="#donate"> Donate </a></li>
    <li><a className="px-3 py-2 rounded-lg hover:text-blue-400" href="#contact"> Contact Us </a></li>
  </ul>
</nav>

  )
}
export default Navbar;
