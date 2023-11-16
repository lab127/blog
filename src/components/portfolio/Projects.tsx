import portfolios from "@/lib/portfolios";
import { FaExternalLinkAlt } from "react-icons/fa";

function isEven(n: number) {
  return n % 2 === 0;
}

export default function Projects() {
  return (
    <section id="portfolio" className="flex flex-col">
      {portfolios.map((portfolio, index) => (
        <div key={index} className="min-h-screen flex items-center">
          <div
            className={`flex flex-col ${
              isEven(index + 1) ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center p-6 border border-spacing-1 border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-xl dark:shadow-neutral-800/50`}
          >
            <div className="max-h-96 w-full overflow-hidden rounded-xl shadow-lg shadow-blue-900/30 dark:shadow-blue-100/30">
              <img
                className="translate-y-0 transition duration-[10000ms] ease-in-out hover:-translate-y-3/4 w-full"
                src={`/portfolio/${portfolio.screenshots}`}
                alt={portfolio.name}
              />
            </div>
            <div className="w-full h-auto text-center px-4 py-8 space-y-4">
              <h2 className="text-3xl font-bold">{portfolio.name}</h2>
              <p className="font-light leading-relaxed">{portfolio.info}</p>
              <ul className="flex flex-row justify-center flex-wrap space-x-2">
                {portfolio.tech_stack.map((tech) => (
                  <li
                    className="p-2 border-solid border-4 border-spacing-3 border-stone-400"
                    key={tech}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                className="flex flex-row justify-center items-center space-x-2 hover:text-stone-400 text-lg dark:hover:text-stone-500"
                href={portfolio.url}
                target="_blank"
              >
                <span>Live</span> <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
