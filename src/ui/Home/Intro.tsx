import introVector from "../../assets/introVector.png";
import introWave from "../../assets/introWave.png";
import circleLeft from "../../assets/circleLeft.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-40 flex items-center justify-between px-24 py-28 mobile:flex-col-reverse mobile:gap-12 mobile:px-6 mobile:py-16 tablet:flex-col-reverse tablet:gap-12 tablet:py-16">
      <img
        className="absolute left-[-1px] top-20 w-[150px] mobile:w-[80px] tablet:w-[100px]"
        src={circleLeft}
        alt=""
        draggable="false"
      />
      <img
        className="absolute right-0 top-[-4px] z-10 w-[900px] mobile:w-[250px] tablet:w-[500px]"
        src={introWave}
        alt=""
        draggable="false"
      />
      <div className="z-50 flex w-[40%] flex-col items-center justify-between gap-10 mobile:w-full tablet:w-full">
        <div className="space-y-4">
          <p className="z-50 text-4xl font-semibold leading-[50px] mobile:text-2xl tablet:text-3xl">
            Your user-friendly guide <br /> to track your
            <span className="font-bold text-linearOrange-200"> AWS </span>
            services !
          </p>
          <p className=" text-lg text-stone-500 mobile:text-sm">
            Track and manage your AWS service usage effortlessly.{" "}
            <span className="font-semibold">Cloud Tracker</span> provides
            real-time insights and detailed billing information, helping you
            optimize costs and enhance efficiency. Simplify your AWS experience.
          </p>
        </div>
        <Button size="xl" onClick={() => navigate("/signIn")}>
          Get Started
        </Button>
      </div>
      <img
        className="z-50 w-[650px] mobile:w-[250px] mobile:self-end tablet:w-[450px] tablet:self-end"
        src={introVector}
        alt=""
        draggable="false"
      />
    </div>
  );
};

export default Intro;
