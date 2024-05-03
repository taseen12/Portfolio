import Image from "next/image";
const Homepage = () => {
  return 
  <div className="h-full flex flex-col">
    {/* image container*/}
    <div className="h-1/2 relative bg-red-200">
      <Image src="/hero.png" alt='' className="object-contain"/>
    </div>
    
  <div className="h-1/2">
    </div>;
  </div>
};

export default Homepage;
