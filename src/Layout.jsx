import styles from "./style";
import { Navbar, Footer } from "./web";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <div className="bg-modernGreen overflow-hidden w-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className={`bg-slate-200 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <div className={` bg-modernGreen ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  );
}
