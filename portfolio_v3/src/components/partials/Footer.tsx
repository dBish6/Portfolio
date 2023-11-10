import Image from "next/image";
import Button from "../Button";
import Link from "../Link";

import s from "@styles/components/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={s.container}>
      <div className={s.top}>
        <div role="presentation" className={s.buttons}>
          <Button
            aria-label="Contact Me"
            className="primaryBtn"
            onPress={() => window.open("mailto:davidbish2002@hotmail.com")}
          >
            <Image
              src="/images/mail-envelope.svg"
              alt="Mail Envelope"
              width={32}
              height={32}
            />
            Contact Me
          </Button>
          <Button
            aria-label="Buy me a Coffee"
            className="primaryBtn"
            onPress={() =>
              window.open(
                "https://www.buymeacoffee.com/dBish",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <Image
              src="/images/coffee-cup.svg"
              alt="Coffee Cup"
              width={28.44}
              height={40.96}
            />{" "}
            Buy me a coffee
          </Button>
        </div>

        <div role="presentation" className={s.links}>
          <ul aria-label="About">
            <li>
              <Link href="" onPress={() => {}}>
                This is me.
              </Link>
            </li>
            <li>
              <Link href="" onPress={() => {}}>
                Development
              </Link>
            </li>
            <li>
              <Link href="" onPress={() => {}}>
                Design
              </Link>
            </li>
          </ul>

          <ul aria-label="Socials">
            <li>
              <Link
                href="https://github.com/dBish6"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/d-bish/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://discordapp.com/users/d_bish"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </Link>
            </li>
          </ul>

          <ul aria-label="Blog">
            <li>
              <Link href="/">Guides</Link>
            </li>
            <li>
              <Link href="/">Rants</Link>
            </li>
            <li>
              <Link href="/">Tech</Link>
            </li>
            <li>
              <Link href="/">React</Link>
            </li>
            <li>
              <Link href="/">Typescript</Link>
            </li>
            <li>
              <Link href="/">Design</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={s.bottom}>
        <h2 aria-label="davidbishop.info">
          <span aria-hidden="true">d</span>
          <span aria-hidden="true">a</span>
          <span aria-hidden="true">v</span>
          <span aria-hidden="true">i</span>
          <span aria-hidden="true">d</span>
          <span aria-hidden="true">b</span>
          <span aria-hidden="true">i</span>
          <span aria-hidden="true">s</span>
          <span aria-hidden="true">h</span>
          <span aria-hidden="true">o</span>
          <span aria-hidden="true">p</span>
          <span aria-hidden="true">.</span>
          <span aria-hidden="true">i</span>
          <span aria-hidden="true">n</span>
          <span aria-hidden="true">f</span>
          <span aria-hidden="true">o</span>
        </h2>
        <hr />
        <p>
          Special thanks to{" "}
          <Link
            href="https://designstripe.com"
            target="_blank"
            rel="noopener noreferrer"
            removeCustomLine
          >
            designstripe
          </Link>{" "}
          for their beautiful Illustrations and device mockups.
          <br /> © 2023 Designed and built by David Bishop
        </p>
      </div>
    </footer>
  );
};

export default Footer;
