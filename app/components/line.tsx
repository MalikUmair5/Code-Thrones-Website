import line from "../../assets/line.png";
import Image from "next/image";

const Line = () => {
  return (
    <div className=" my-6 flex justify-center">
      <Image className=" w-[85%]" src={line} alt="Line" />
    </div>
  );
};



export default Line;