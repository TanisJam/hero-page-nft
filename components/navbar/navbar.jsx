import Link from "next/link";
import { DiYii } from "react-icons/di";
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

      <div className="search">
        <input type="text" placeholder="Search" />
      </div>

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
          <button>Connect Wallet</button>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
