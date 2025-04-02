import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

const badgesData = [
  {
    name: "Dr. Majid",
    count: "213k",
    label: "Subscribers",
    icon: FaYoutube,
    iconColor: "text-red-500",
  },
  {
    name: "emilia_reads",
    count: "120k",
    label: "Followers",
    icon: FaTiktok,
    iconColor: "text-black",
  },
  {
    name: "musanation",
    count: "120k",
    label: "Followers",
    icon: FaInstagram,
    iconColor: "text-pink-500",
  },
  {
    name: "Mariana",
    count: "131k",
    label: "Followers",
    icon: FaFacebook,
    iconColor: "text-blue-600",
  },
  {
    name: "Mama Miller",
    count: "152k",
    label: "Followers",
    icon: FaXTwitter,
    iconColor: "text-black",
  },
];

interface SubscriberBadgeProps {
  name: string;
  count: string;
  label: string; // "Subscribers" or "Followers"
  icon: React.ElementType;
  iconColor: string; // Color for the icon
}

const SubscriberBadge: React.FC<SubscriberBadgeProps> = ({
  name,
  count,
  label,
  icon: Icon,
  iconColor,
}) => {
  return (
    <div className="bg-white text-sm flex flex-col rounded px-3 py-2 shadow-md">
      <div className="flex items-center space-x-2">
        {Icon && <Icon className={`${iconColor} text-xl`} />}
        <h1 className="font-semibold text-sm">{name}</h1>
      </div>
      <p className="text-sm text-nowrap">
        {count} {label}
      </p>
    </div>
  );
};

const InfluencerHelped = () => {
  return (
    <div className="bg-brand-light group mt-12 lg:mt-0 py-[64px] lg:py-[180px]">
      <div className="container md:flex justify-between items-center">
        <div className="hidden lg:block w-1/2  relative">
          {/* Top Row */}
          <div className="flex space-x-2.5 justify-center items-end">
            <div className="w-[93px] relative h-[93px]">
              <div
                className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-[2]"
                style={{
                  backgroundImage: "url('/images/influencerhelped/3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transformOrigin: "bottom right",
                }}
              ></div>

              <div className="absolute top-1/3 right-[30px] group-hover:translate-x-[-60px] transition-transform duration-300 ease-out">
                <SubscriberBadge
                  name={badgesData[0].name}
                  count={badgesData[0].count}
                  label={badgesData[0].label}
                  icon={badgesData[0].icon}
                  iconColor={badgesData[0].iconColor}
                />
              </div>
            </div>

            <div className="w-[90px]  relative h-[140px]">
              <div
                className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-[2]"
                style={{
                  backgroundImage: "url('/images/influencerhelped/4.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transformOrigin: "bottom left",
                }}
              ></div>

              <div className="absolute top-1/2 left-[30px] group-hover:translate-x-[60px] transition-transform duration-300 ease-out">
                <SubscriberBadge
                  name={badgesData[1].name}
                  count={badgesData[1].count}
                  label={badgesData[1].label}
                  icon={badgesData[1].icon}
                  iconColor={badgesData[1].iconColor}
                />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-2.5 flex justify-center space-x-2.5 items-center">
            <div className="w-[112px] relative h-[112px]">
              <div
                className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-[-50px] ease-out group-hover:scale-[2]"
                style={{
                  backgroundImage: "url('/images/influencerhelped/2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transformOrigin: "top right", // Scale from bottom-left
                }}
              ></div>

              <div className="absolute bottom-0 group-hover:translate-x-[-85%] group-hover:translate-y-[230%] transition-transform duration-300 ease-out">
                <SubscriberBadge
                  name={badgesData[2].name}
                  count={badgesData[2].count}
                  label={badgesData[2].label}
                  icon={badgesData[2].icon}
                  iconColor={badgesData[2].iconColor}
                />
              </div>
            </div>

            <div className="w-[93px] relative h-[140px]">
              <div
                className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-[2]"
                style={{
                  backgroundImage: "url('/images/influencerhelped/1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transformOrigin: "top center",
                }}
              ></div>
              <div className="absolute bottom-0 group-hover:translate-x-[-10%] group-hover:translate-y-[290%] transition-transform duration-300 ease-out">
                <SubscriberBadge
                  name={badgesData[3].name}
                  count={badgesData[3].count}
                  label={badgesData[3].label}
                  icon={badgesData[3].icon}
                  iconColor={badgesData[3].iconColor}
                />
              </div>
            </div>

            <div className="w-[111px] relative h-[102px] ">
              <div
                className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-[2] group-hover:translate-x-[50px]"
                style={{
                  backgroundImage: "url('/images/influencerhelped/5.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transformOrigin: "top left", // Scale from bottom-right
                }}
              ></div>
              <div className="absolute bottom-0 group-hover:translate-x-[75%] group-hover:translate-y-[230%] transition-transform duration-300 ease-out">
                <SubscriberBadge
                  name={badgesData[4].name}
                  count={badgesData[4].count}
                  label="Subscribers"
                  icon={badgesData[4].icon}
                  iconColor={badgesData[4].iconColor}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-4xl lg:ml-12 2xl:ml-16 text-center md:text-left font-semibold text-brand-dark">
            We’ve helped influencers go from 0 to 100K+ followers in months.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default InfluencerHelped;
