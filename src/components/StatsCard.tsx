import { useEffect, useState } from "react";
import CardComponent from "./Card";
import { Progress } from "./ui/progress";
import RadialChart from "./RadialChart";

export default function StatsCard() {
  const [progressValue, setProgressValue] = useState(0);
  const [radialValue] = useState(360);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValue((prevValue) => prevValue + 75);
    });
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
      <CardComponent>
        <div className="-mx-10 border-b-3 border-[#DBE8F4] px-10">
          <div className="flex items-center justify-between">
            <p className="text-md font-medium">New Message</p>
            <img
              src="/assets/icons/message.png"
              alt="message-icon"
              className="w-auto h-4"
            />
          </div>

          <span className="text-4xl font-bold block my-2">85</span>
        </div>

        <div className="relative w-full my-5 flex flex-col gap-2">
          <div
            className="absolute -top-8 z-50 transform -translate-x-1/2 text-[10px] font-semibold bg-white shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)] px-2 py-1 rounded-sm"
            style={{ left: `${progressValue}%` }}
          >
            {progressValue}%
          </div>

          <Progress value={progressValue} color="#1768b3" />
          <p className="text-sm font-semibold">Response Rate</p>
        </div>
      </CardComponent>
      <CardComponent>
        <div className="-mx-10 px-10">
          <div className="flex items-center justify-between">
            <p className="text-md font-medium">Leads</p>
            <img
              src="/assets/icons/dot.png"
              alt="message-icon"
              className="w-auto h-4"
            />
          </div>

          <span className="text-4xl font-bold block my-2">85</span>
        </div>
        <div className="flex-col lg:flex-row flex mt-3 lg:mt-0 items-center gap-2 lg:gap-8 justify-between">
          <div className="flex flex-col gap-1 items-center lg:items-end">
            <p className="flex items-center gap-2 text-sm tracking-wider">
              <span className="font-semibold">60%</span>
              Daily Goal
            </p>
            <p className="flex items-center gap-2 text-sm tracking-wider">
              <span className="font-semibold">60</span> This Week
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute top-1/2 left-28 lg:left-2/3 z-50 transform -translate-x-1/2 text-[10px] font-semibold bg-white shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)] px-2 py-1 rounded-sm">
              100%
            </div>

            <RadialChart value={radialValue} />
          </div>
        </div>
      </CardComponent>
      <CardComponent>
        <div className="-mx-10 border-b-3 border-[#DBE8F4] px-10">
          <div className="flex items-center justify-between">
            <p className="text-md font-medium">New Message</p>
            <img
              src="/assets/icons/message.png"
              alt="message-icon"
              className="w-auto h-4"
            />
          </div>

          <span className="text-4xl font-bold block my-2">85</span>
        </div>

        <div className="relative w-full my-5 flex flex-col gap-2">
          <div
            className="absolute -top-8 z-50 transform -translate-x-1/2 text-[10px] font-semibold bg-white shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)] px-2 py-1 rounded-sm"
            style={{ left: `${progressValue}%` }}
          >
            {progressValue}%
          </div>

          <Progress value={progressValue} color="#1768b3" />
          <p className="text-sm font-semibold">Response Rate</p>
        </div>
      </CardComponent>
    </div>
  );
}
