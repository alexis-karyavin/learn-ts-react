import Sidebar from '../../components/Sidebar/Sidebar';
import { PATH } from '../../constants/path';
import styles from './Main.module.css';
import { Outlet, redirect } from 'react-router-dom';

function Main() {
  redirect(PATH.MENU);
  return (
    <div className={styles.mainPage}>
      <Sidebar />
      <div className={styles.mainBody}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
