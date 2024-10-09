import Paragraph from "../components/Paragraph";

const ServicesDiscription = () => {
  return (
    <div className="">
      <div className=" flex gap-14 justify-center">
        <Paragraph Heading="Website Design & Development" />
        <Paragraph Heading="Mobile App Development" />
        <Paragraph Heading="SEO" />
      </div>
      <div className=" flex gap-14 justify-center">
        <Paragraph Heading="Graphic Designing" />
        <Paragraph Heading="Mobile App With Flutter" />
        <Paragraph Heading="Game Development" />
      </div>
    </div>
  );
};

export default ServicesDiscription;
