import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideMenu from "../components/SideMenu";
import styles from "../styles/components/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <SideMenu className={styles.sidemenu} />
      <main className={styles.children}>
        <ToastContainer />
        {children}
      </main>
      <ScrollUpButton />
    </div>
  );
}
