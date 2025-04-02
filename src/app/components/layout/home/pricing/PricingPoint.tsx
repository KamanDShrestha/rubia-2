import { ReactNode } from "react";
import Image from "next/image";

interface PricingPointInterface {
    children: ReactNode;
  }
  
  const PricingPoint: React.FC<PricingPointInterface> = ({ children }) => {
    return (
      <div className="flex space-x-3">
        <div className="w-7 h-7 flex justify-center items-center bg-brand-light rounded-full">
          <Image src={"/icons/blue-tick.svg"} alt="" width={10} height={10} />
        </div>
  
        <p className="w-full">{children}</p>
      </div>
    );
  };

export default PricingPoint;