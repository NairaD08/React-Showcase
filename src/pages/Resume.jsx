function Resume() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            My Resume
          </h1>
          <a href="/RESUME.pdf" download>
            Download My Resume
          </a>

          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  Front-end Proficiences
                </a>
                <ul className="list-disc pl-5">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Responsive Design</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>

            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  Back-end Proficiences
                </a>
                <ul className="list-disc pl-5">
                  <li>APIs</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MySQL, Sequelize</li>
                  <li>REST</li>
                  <li>GraphQL</li>
                </ul>

                <span class="text-sm text-gray-500 dark:text-gray-300"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Resume;
