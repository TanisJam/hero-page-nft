import Link from "next/link";
import { DiYii } from "react-icons/di";
import { FiSearch } from "react-icons/fi";
import Button from "../button";
import Dropdown from "./dropdown/dropdown";
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
        <button>
          <FiSearch />
        </button>
        <input type="text" placeholder="Search" />
      </form>

      <Dropdown />

      <Button>Connect Wallet</Button>
    </nav>
  );
};

export default navbar;
