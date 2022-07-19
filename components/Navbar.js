const NavItem = (props) => {
  return (
    <div>
      <li>
        <a href={props.href} className="font-barlow hover:text-black duration-400 ">
          {props.text}
        </a>
      </li>
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-blue font-barlow text-white px-5 py-5  ">
        <h1 className=" text-xl lg:text-3xl cursor-pointer">sunnyside</h1>

        <div className="hidden w-full lg:block lg:w-auto">
          <ul className=" text-md flex items-center space-x-10">
            <NavItem href="/about" text="About" />
            <NavItem href="/services" text="Services" />
            <NavItem href="/projects" text="Projects" />
            <button className="font-fraunces text-black px-3 py-1 bg-white rounded-full hover:bg-white hover:text-white hover:bg-opacity-25 transition duration-400">
              CONTACT
            </button>
          </ul>
        </div>
      </nav>

      <img className="" src="/desktop/image-header.jpg" alt="notion-image" />
    </div>
  );
};

export default Navbar;
