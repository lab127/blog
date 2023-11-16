import portfolios from "@/lib/portfolios";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function isEven(n: number) {
  return n % 2 === 0;
}

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-between pb-14 pt-24 lg:pt-32"
      >
        <div className="relative place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="text-4xl sm:text-6xl my-6 font-bold leading-relaxed relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
            Front-End React Developer
          </h1>
        </div>
        <div className="flex flex-col space-y-2 my-8 items-center sm:items-start">
          <p className="leading-relaxed text-xl sm:text-2xl">
            Hi, I am Aris (lab127) A passionate Front-end React Developer based
            in Yogyakarta, Indonesia.
          </p>
          <div className="py-8">
            <a href="https://github.com/lab127" target="_blank">
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between my-8 sm:flex-row sm:space-x-2">
          <p className="font-bold text-2xl underline underline-offset-4 sm:no-underline py-4 sm:border-r-2 sm:pr-2">
            Tech Stack
          </p>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            <img src="https://skillicons.dev/icons?i=html,css" alt="html,css" />
            <img src="https://skillicons.dev/icons?i=js,ts" alt="js,ts" />
            <img
              src="https://skillicons.dev/icons?i=react,next"
              alt="react,next"
            />
            <img
              src="https://skillicons.dev/icons?i=tailwind,scss"
              alt="tailwind,scss"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex flex-col justify-evenly pb-14 pt-24 lg:pt-32"
      >
        <h2 className="uppercase text-3xl">About me</h2>
        <h4 className="text-2xl font-light">
          A dedicated Front-End React Developer based in Yogyakarta, Indonesia
        </h4>
        <div className="leading-relaxed space-y-4">
          <p>
            Aspiring web developer experience in E-Commerce using Shopify,
            WooCommerce, and BigCommerce. Recently, I pivoted my career from
            back-end to front-end react developer due to challenge and interest
            in JavaScript technology.
          </p>
          <p>
            Currently, I am focus on installing, testing, and maintenance
            WordPress and WooCommerce websites. I typically use HTML, CSS and
            JavaScript in the client while using PHP, Python or Node.js for
            back-end.
          </p>
        </div>
      </section>

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
        {/* <div className="w-full h-auto flex flex-row-reverse">
          <div>
            <h2>Jarcase</h2>
            <p>Custom Phone Case for iPhone and Samsung Galaxy</p>
            <ul>
              <li>WooCommerce</li>
              <li>Elementor</li>
            </ul>
          </div>
          <div className="h-72 overflow-hidden">
            <img
              className="translate-y-0 transition duration-1000 ease-in-out hover:-translate-y-3/4"
              src="/portfolio/jarcase.com.jpg"
              alt="website"
            />
          </div>
        </div> */}
      </section>
    </>
  );
}
