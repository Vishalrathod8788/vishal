import { useLocation, Link } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  // Helper function to format segment names
  const formatSegment = (segment) => {
    // Convert slug to readable text (e.g., "fix-dual-boot" -> "fix dual boot")
    return segment.replace(/-/g, " ");
  };

  return (
    <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
      <Link
        to="/"
        className="text-xl font-semibold text-gray-600 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
      >
        Vishal
      </Link>
      {segments.map((segment, index) => {
        const path = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="mx-1"
            >
              <path
                d="M6 12l4-4-4-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {isLast ? (
              <span className="capitalize text-base text-gray-900 dark:text-white line-clamp-1">
                {formatSegment(segment)}
              </span>
            ) : (
              <Link
                to={path}
                className="capitalize text-base hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {formatSegment(segment)}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}