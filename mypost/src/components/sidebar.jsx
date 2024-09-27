const Sidbar = ({ selected, setSelected }) => {
  const HandleOnclick = (tabName) => {
    setSelected(tabName);
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sd"
      style={{ width: "210px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Akhilesh</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            HandleOnclick("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${selected === "Home" && "active"}`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            HandleOnclick("Create-post");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selected === "Create-post" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create-post
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidbar;
