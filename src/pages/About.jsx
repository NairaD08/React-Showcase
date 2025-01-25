import Naira from "../Naira.jpg";
function About() {
  return (
    <>
      <div class="pt-10">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                className="rounded-[50px]"
                src={Naira}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl ">
                About Me
              </h2>
              <p class="mt-6 text-gray-600  ">
                My name is Naira, and I am passionate retail banking
                professional with over 8 years of experience in providing
                exceptional customer service and financial solutions. Currently,
                I am expanding my horizons by diving into the world of
                full-stack web development at UC Berkeley, where I am on the
                brink of earning my certificate.
              </p>
              <p class="mt-4 text-gray-600 ">
                {" "}
                My eagerness to learn and embrace new challenges is matched only
                by my love for the great outdoors and my culinary adventures in
                baking. When I am not honing my coding skills, you can find me
                hiking scenic trails or whipping up delicious treats in the
                kitchen. With my unique blend of banking expertise and newfound
                tech skills, I am excited to bring my creativity and dedication
                to a dynamic team!
              </p>
            </div>
          </div>
        </div>
      </div>
      {}
    </>
  );
}

export default About;
// npm run dev
