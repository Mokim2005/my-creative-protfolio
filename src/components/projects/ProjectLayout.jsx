import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({
  name,
  description,
  date,
  demoLink,
  githubLink,
}) => {
  return (
    <motion.div variants={item}>
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg gap-4">

        {/* Left Content */}
        <div className="flex flex-col">
          <h2 className="text-foreground text-lg font-semibold">{name}</h2>
          <p className="text-muted text-sm hidden sm:block">
            {description}
          </p>
        </div>

        {/* Date */}
        <p className="text-muted text-sm">
          {new Date(date).toDateString()}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4">

          {/* Live Demo */}
          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              className="text-foreground hover:text-primary transition text-xl"
            >
              <FiExternalLink />
            </Link>
          )}

          {/* GitHub */}
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="text-foreground hover:text-primary transition text-xl"
            >
              <FiGithub />
            </Link>
          )}

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectLayout;