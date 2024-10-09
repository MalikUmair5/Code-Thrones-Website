import { div } from "framer-motion/client";

const Paragraph = ({
  Heading,
  Content,
}: {
  Heading: string;
  Content?: string;
}) => {
  return (
    <div className=" w-[350px] my-10">
      <h3 className=" text-[#2F80ED] text-[24px] leading-normal tracking-tight">
        {Heading}
      </h3>
      <p className=" text-[#717171] font-normal text-[13px]">
        {Content
          ? Content
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui. Purus diam elit vitae scelerisquesem rutrum ut pharetra, a. Venenatis tellus vivamus scelerisque egestas lacus faucibus cursus. Eu leo elementum hendrerit gravida et ultriciesat. Ut elementum accumsan ut elit. Egestas sit senectus et blandit. Ut."}
      </p>
    </div>
  );
};

export default Paragraph;
