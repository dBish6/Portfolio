// import { usePathname } from "next/navigation";
import Link from "../../Link";
import s from "@styles/components/Aside.module.css";

const Aside = () => {
  return (
    // TODO:
    <aside className={`${s.container} ${s.isWelcomeSection}`}>
      <Link
        href="mailto:davidbish2002@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span role="presentation" className={s.imgContainer}>
          <img src="/images/mail-envelope-colour.svg" alt="Mail Envelope" />
        </span>
        Contact
      </Link>
      <Link
        href="https://github.com/dBish6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span role="presentation" className={s.imgContainer}>
          <img src="/images/github-logo.svg" alt="GitHub Logo" />
        </span>
        GitHub
      </Link>
      <Link
        href="https://www.linkedin.com/in/d-bish/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span role="presentation" className={s.imgContainer}>
          <img src="/images/linkedin-logo.svg" alt="LinkedIn Logo" />
        </span>
        LinkedIn
      </Link>
    </aside>
  );
};

export default Aside;
