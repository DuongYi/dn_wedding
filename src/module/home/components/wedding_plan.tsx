import Image from "next/image";
import React from "react";

const planData = [
  {
    title: "The Day Before",
    events: [
      { name: "Event One", time: "03:00 PM" },
      { name: "Event two", time: "05:00 PM" },
      { name: "Event three", time: "08:00 PM" },
    ],
  },
  {
    title: "The Wedding Day",
    events: [
      { name: "Ceremony", time: "03:00 PM" },
      { name: "Reception", time: "05:00 PM" },
      { name: "Farewell", time: "08:00 PM" },
    ],
  },
  {
    title: "The Day After",
    events: [
      { name: "Event One", time: "03:00 PM" },
      { name: "Event two", time: "05:00 PM" },
      { name: "Event three", time: "08:00 PM" },
    ],
  },
];

const WeddingPlan: React.FC = () => {
  return (
    <section className="flex w-full bg-white">
      {/* Left: Image */}
      <div className="flex-1 relative w-1/2">
        <div className="bg-[url('/asset/pictures/wedding/ac3.png')] h-full bg-cover bg-no-repeat bg-center object-fill" ></div>
      </div>
      {/* Right: Plan Content */}
      <div className="flex-1 flex items-center justify-center bg-[#fafafa] px-12">
        <div className="w-full max-w-xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-8 h-8">
                <Image src="/asset/pictures/icon/flower2.svg" alt="flower" width={32} height={32} />
              </span>
            </div>
            <h1 className="font-felidae text-5xl font-light text-gray-800 mb-6">The Plans</h1>
          </div>
          <div className="space-y-8">
            {planData.map((group) => (
              <div key={group.title}>
                <h2 className="font-felidae text-2xl text-gray-700 mb-3">{group.title}</h2>
                <div className="space-y-2">
                  {group.events.map((ev, idx) => (
                    <div key={ev.name + idx} className="flex justify-between text-gray-700 text-lg font-light">
                      <span>{ev.name}</span>
                      <span className="ml-8">{ev.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPlan;
