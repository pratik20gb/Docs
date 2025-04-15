import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {
    const ref = useRef(null)
  const data = [
    {
      description:
        "This is description that is displayed form mapping the data .",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description:
        "This is description that is displayed form mapping the data .",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "upload", tagColor: "blue" },
    },
    {
      description:
        "This is description that is displayed form mapping the data .",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  // useState()
  return (
    
      <div ref={ref} className="w-full h-full z-[3] fixed top-0 left-0 flex flex-wrap gap-10 p-5 ">
        {data.map((item, index) => (
          <Card data={item} reference = {ref}/>
        ))}
      </div>
    
  );
}

export default Foreground;
