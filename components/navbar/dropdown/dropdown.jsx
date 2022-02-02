import { useState } from "react";
import Link from "next/link";
import styles from "./dropdown.module.scss";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Dropdown = () => {
  const [hideMenu, setHideMenu] = useState(true);

  const toggleMenu = () => {
    setHideMenu(!hideMenu);
  };

  return (
    <div className={styles.dropdown}>
      <span className={styles.btnMenu} onClick={toggleMenu}>
        More
        {hideMenu ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </span>
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
      </ul>
      <div className={styles.dropdownItems}>
        <ul className={hideMenu && styles.hidden}>
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
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
