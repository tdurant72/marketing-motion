'use client'

import React, { useState, useEffect, lazy, Suspense } from "react";
import { Separator } from "./ui/separator";
// import Pointer from "./pointer";
function LoadingSpinner(){
  return(<div>Loading...</div>)
}
const Pointer = lazy(() => import("./pointer"));
interface StatCardProps {
  number: string;
  label: string;
  pointerDescription?: () => React.JSX.Element;
}
const StatCard: React.FC<StatCardProps> = ({ number, label, pointerDescription }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const formatNumber = (num: string): string => {
    if (num.includes("%")) {
      return num;
    }
    if (num.includes("$")) {
      return `$${num.replace(/[^0-9]/g, "")}+`;
    }
    return `${num.replace(/[^0-9]/g, "")}+`;
  };

  return (
    <div ref={cardRef} className="bg-gray-100 p-6 shadow-sm">
      <div className="h-14 ">
        <div
          className={`text-5xl font-bold mb-2 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {formatNumber(number)}
        </div>
      </div>
      <div
        className={`text-[#7b7b7b] text-sm transform transition-all duration-700 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {label}
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <Pointer>
          {pointerDescription && pointerDescription()}
        </Pointer>
      </Suspense>
    </div>
  );
};
const Stats: React.FC = () => {
  const stats = [
    { number: "100", 
      label: "Clients from 17 Countries", pointerDescription: ()=> (
        <div className="rounded-2xl bg-slate-50 p-4 drop-shadow-2xl max-w-96 flex flex-col gap-4">
          <h3 className="text-slate-800 font-light">We have successfully served clients from a diverse range of 17 countries, showcasing our global reach and adaptability.</h3>
          <video autoPlay muted loop className="rounded-lg overflow-hidden">
            <source src="/videos/ncgtp-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) },
    { number: "280", 
      label: "Millions raised for our clients", pointerDescription:()=>(
        <div className="rounded-2xl bg-slate-50 p-4 drop-shadow-2xl max-w-96">
          <h3 className="text-slate-800 font-light">Our expertise has helped clients raise a total of $280 million, demonstrating our ability to drive significant financial growth.</h3>
        </div>  
      )
    },
    { 
      number: "90", 
      label: "Of our clients come back", 
      pointerDescription: ()=>(
        <div className="rounded-2xl bg-slate-50 p-4 drop-shadow-2xl max-w-96">
          <h3 className="text-slate-800 font-light">A remarkable 90% of our clients return to us for additional services, highlighting our commitment to client satisfaction and long-term relationships.</h3>
        </div>
      )
    },
    { 
      number: "98", 
      label: "Net Promoting Score", 
      pointerDescription: ()=>(
        <div className="rounded-2xl bg-slate-50 p-4 drop-shadow-2xl max-w-96">
          <h3 className="text-slate-800 font-light">With a Net Promoting Score of 98, our clients consistently express high levels of satisfaction and willingness to recommend our services to others.</h3>
        </div>
      ) 
    },
  ];

  return (
    <div
      className="mx-auto   
     2xl:w-4/5 md:px-16

    
    
    px-6 "
    >
      <Separator className="my-16" />

      <div className="flex flex-col md:flex-row items-start justify-between ">
        <div className="md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold">our numbers:</h2>
          <p className="text-gray-500 mt-4">
            With every project we take on, we strive to deliver the best results
            for our clients.
          </p>
        </div>
        <div className="md:w-2/4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} pointerDescription={stat.pointerDescription} />
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-16" />
    </div>
  );
};

export default Stats;