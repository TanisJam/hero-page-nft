import Link from "next/link";
import { DiYii } from "react-icons/di";
import {FiSearch} from "react-icons/fi";
import Button from "../button";
import styles from "./navbar.module.scss";

const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.brand}>
          <DiYii className={styles.logo} />

          <p>QUORUM.ART</p>
        </a>
      </Link>

      <form className={styles.searchContainer}>
        <button><FiSearch/></button>
        <input type="text" placeholder="Search" />
      </form>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            <a>Explore NFT</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Artist</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Community</a>
          </Link>
        </li>
        <li>
          <Button>Connect Wallet</Button>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
