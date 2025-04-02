import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  buttonClass?: string;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  buttonClass,
  link,
}) => {
  if (link) {
    return (
      <Link
        href={link}
        className={`bg-brand-saturated hover:bg-[#006bd7] transition duration-300 rounded-md text-white py-2.5 px-4 font-semibold ${buttonClass}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
    className={`bg-brand-saturated hover:bg-[#006bd7] transition duration-300 rounded-md text-white py-2.5 px-4 font-semibold ${buttonClass}`}
    onClick={onClick}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
