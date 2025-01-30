import { Link, useLocation } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <>
      <nav className="text-sm text-gray-600 mb-4 sm:mt-16 lg:mt-0 bg-gray-300 py-3 px-5 rounded-sm mx-4 md:mx-0">
        <ul className="flex items-center space-x-2">
          <li>
            <Link
              to="/"
              className="text-[#002039] font-semibold hover:underline"
            >
              Home
            </Link>
          </li>

          {paths.map((path, index) => {
            const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
            const isLast = index === paths.length - 1;

            return (
              <li key={fullPath} className="flex items-center">
                <FaCaretRight className="text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-[#002039] font-semibold hover:underline">
                    {decodeURIComponent(path)
                      .split("-") // Handles kebab-case URLs (e.g., "my-page" -> "My Page")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </span>
                ) : (
                  <Link
                    to={fullPath}
                    className="text-blue-500 hover:underline capitalize"
                  >
                    {decodeURIComponent(path)}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <hr className="border-2 border-black mt-3 w-full" />
    </>
  );
};

export default Breadcrumb;
