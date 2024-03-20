import "./Header.scss";

const Header = ({ title }) => {
  return (
    <header className="mt-0 w-100">
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <h1 className="text-light display-2">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
