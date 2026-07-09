import React from "react";
import * as flags from "@/components/flags";

const Flag = ({ props: { flag, title, link } }) => {
  const FlagComponent = flags[flag];

  const content = (
    <div className={`relative group flex justify-center`}>
      <div>
        <FlagComponent />
      </div>
      <div className=" transition-opacity duration-300 absolute opacity-0 group-hover:block group-hover:opacity-100 bg-black text-white text-shadow rounded-2xl py-5 px-9 bg-opacity-75 flex justify-center w-fit ">
        <h3 className="font-stopbuck text-3xl">{title}</h3>
      </div>
    </div>
  );

  // Check if link is empty or uses placeholder CA / COMING SOON
  if (!link || link.includes("COMING SOON") || link.includes("mewdon1111111111111111111111111111111111111")) {
    return (
      <div className="cursor-not-allowed opacity-50 grayscale" title="Coming Soon">
        {content}
      </div>
    );
  }

  return (
    <a href={link} target="_blank">
      {content}
    </a>
  );
};

export default Flag;
