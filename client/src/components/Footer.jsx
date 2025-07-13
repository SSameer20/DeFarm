import { socialLinks } from "../utils/types";

export default function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center px-4 py-6 bg-transparent gap-10"
      style={{ paddingBottom: "2rem", paddingTop: "2rem" }}
    >
      <div className="w-3/4 border-b border-gray-800" />
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl gap-4 mt-10">
        <p className="text-xl font-semibold text-white opacity-60 hover:opacity-100 ">
          <a href="/">DeHarvest</a>
        </p>
        <div className="opacity-70">
          <div className="flex lg:flex-row sm:flex-col items-center gap-10">
            {socialLinks?.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition duration-300 text-white cursor-pointer"
                aria-label={link.name}
              >
                <span className="flex items-center gap-2 justify-center">
                  <link.icon /> {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* <p className="text-sm text-gray-500 opacity-70">
          Powered by 0xLabs-Org
        </p> */}
      </div>
      <span className="mt-4 text-xs text-gray-400 opacity-70 text-center">
        &copy; {new Date().getFullYear()} DeHarvest. All rights reserved.
      </span>
    </footer>
  );
}
