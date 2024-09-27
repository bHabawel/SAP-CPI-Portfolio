import Portfolio1_1 from "../assets/porfolio/portfolio-1_1.png";
import Portfolio2_2 from "../assets/porfolio/portfolio-2_2.png";
import Portfolio3_3 from "../assets/porfolio/portfolio-3_3.png";
import Portfolio4_4 from "../assets/porfolio/portfolio-4_4.png";
import Portfolio5_5 from "../assets/porfolio/portfolio-5_5.png";
import Portfolio6_6 from "../assets/porfolio/portfolio-6_6.png";
// import Portfolio7 from "../assets/porfolio/portfolio-7.jpg";
// import Portfolio8 from "../assets/porfolio/portfolio-8.png";
// import Portfolio9 from "../assets/porfolio/portfolio-9.jpg";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 "
    >
      <h3 className="text-2xl text-[#C1C1C1]">PORTFOLIO</h3>
      <h3 className="text-[56px] font-bold text-white leading-[1]">
        My Recent Work
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-[51px]">
        <div className="grid gap-4">
          <a
            href="https://fast-react-pizza-co-five.vercel.app/"
            className="overflow-hidden rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]"
              src={Portfolio1_1}
              alt=""
            />
          </a>
          <a
            href="https://travel-list-drab-two.vercel.app/"
            className="overflow-hidden rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]"
              src={Portfolio2_2}
              alt=""
            />
          </a>
          <a
            href="https://movie-list-neon.vercel.app/"
            className="overflow-hidden rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]"
              src={Portfolio3_3}
              alt=""
            />
          </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
          <a
            href="https://hero-verse.vercel.app/"
            className="overflow-hidden rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]"
              src={Portfolio4_4}
              alt=""
            />
          </a>
          <a
            href="https://responsive-web-design-coffeellera.vercel.app/"
            className="overflow-hidden rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]"
              src={Portfolio5_5}
              alt=""
            />
          </a>
          <a
            href="https://sap-dev-team.vercel.app/"
            className="overflow-hidden rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]"
              src={Portfolio6_6}
              alt=""
            />
          </a>
        </div>
        {/* <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
          <a
            href="#"
            className="overflow-hidden rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]"
              src={Portfolio7}
              alt=""
            />
          </a>
          <a
            href="#"
            className="overflow-hidden rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]"
              src={Portfolio8}
              alt=""
            />
          </a>
          <a
            href="#"
            className="overflow-hidden rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]"
              src={Portfolio9}
              alt=""
            />
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Portfolio;
