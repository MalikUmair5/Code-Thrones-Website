const Hero = () => {
  return (
    <main className="lg:px-20 xs:px-3 md:px-10 lg:py-2 md:py-0">
      <div className=" flex items-center xs:flex-wrap md:flex-nowrap">
        <div className="">
          <h1 className=" font-bold text-[60px] leading-normal tracking-tighter">Audience of your kind</h1>
          <p className="w-[580px] text-[18px] tracking-[0.24px]">
            We аre аn аgenсy thаt believe in the роwer оf digitаl tо trаnsfоrm
            yоur business. Whether it be а new website, mаrketing саmраign оr
            рrоduсtivity imрrоving sоftwаre, digitаl саn trаnsfоrm аnd grоw yоur
            business.
          </p>
        </div>
        <div className="w-[0] h-[250px] sm:hidden xs:hidden"></div>
        <div className=" w-[600px] lg:h-[500px] z-[-1] bg-[#2F80ED] lg:absolute top-0 right-0 lg:flex items-center justify-center text-white lg:rounded-bl-[200px] sm:flex sm:rounded-bl-[0px] md:rounded-md md:h-auto md:p-5">
          <ul className=" text-[19px] font-[600px] space-y-1 tracking-tighter">
            <li className=" font-thin">We Provide:</li>
            <li>App Devolopment</li>
            <li>Local SEO</li>
            <li>Search Engine Optimization</li>
            <li>Social Media Marketing</li>
            <li>Email Management</li>
            <li>Pay Per Click Management</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Hero;
