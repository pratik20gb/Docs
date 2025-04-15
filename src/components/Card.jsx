import { SiDocsify } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.1}  dragTransition={{bounceDamping:30,bounceStiffness:100}}
      className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden"
    >
      <SiDocsify />
      <p className="text-sm mt-5 font-semibold leading-tight">
        {data.description}
      </p>
      <div className="footer  absolute bottom-0  w-full   left-0 ">
        <div className=" flex items-center justify-between px-8 py-3 mb-3">
          <h5> {data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <FaDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 flex items-center justify-center ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
