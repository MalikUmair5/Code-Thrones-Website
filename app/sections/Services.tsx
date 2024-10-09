import Frame2 from "../../assets/Frame 2.png";
import Frame11 from "../../assets/Frame 11.png";
import Frame17 from "../../assets/Frame 17.png";
import Frame18 from "../../assets/Frame 10.png";
import Image from "next/image";

const Services = () => {
  return (
    <div className=" container mt-6">
      <div className=" flex">
        <div className=" bg-[#E0ECFD] w-[1235px] p-24 rounded-r-[55px]">
          <h2 className=" text-[#2F80ED] text-[36px] font-bold leading-normal tracking-tighter">
            360-degree Solution to your Business
          </h2>
          <p>Our services include:</p>
          <ul>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>SEO</li>
            <li>Domain & Hosting</li>
            <li>Marketing</li>
          </ul>
        </div>
        <div className=" flex flex-wrap gap-6 justify-end">
          <Image
            className=" w-48"
            src={Frame2}
            alt="Frame2"
            placeholder="empty"
          />
          <Image
            className=" w-48"
            src={Frame11}
            alt="Frame11"
            placeholder="empty"
          />
          <Image
            className=" w-48"
            src={Frame17}
            alt="Frame17"
            placeholder="empty"
          />
          <Image
            className=" w-48"
            src={Frame18}
            alt="Frame18"
            placeholder="empty"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
