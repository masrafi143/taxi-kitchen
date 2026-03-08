import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 py-4 w-11/12 mx-auto">
      <Logo></Logo>
      <nav>
        <ul className="flex gap-16 ">
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1 border-amber-500 duration-200 hover:font-bold"
            >
              Orders
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1 border-amber-500 duration-200 hover:font-bold"
            >
              Foods
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1 border-amber-500 duration-200 hover:font-bold"
            >
              Tables
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1 border-amber-500 duration-200 hover:font-bold"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
