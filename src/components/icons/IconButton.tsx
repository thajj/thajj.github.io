import IconLinkedin from "@/components/icons/linkedin";
import IconExternal from "./external";
import IconGithub from "./github";
import IconMail from "./mail";

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case "mail":
      return <IconMail />;
    case "github":
      return <IconGithub />;
    case "linkedin":
      return <IconLinkedin />;
    default:
      return <IconExternal />;
  }
};

interface IconButtonProps {
  href: string;
  name: string;
}

const IconButton: React.FC<IconButtonProps> = ({ href, name }) => {
  return (
    <a
      // title={name}
      href={href}
      target="_blank"
      className="link-effect btn btn-ghost btn-circle hover:btn-outline btn-accent block inline-flex items-center justify-center p-0"
      rel="noreferrer"
    >
      <Icon name={name} />
    </a>
  );
};

export default IconButton;
