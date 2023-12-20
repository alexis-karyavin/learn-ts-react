import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img className={styles.avatar} src="/avatar.svg" alt="Avatar" />
      <h3 className={styles.name}>Вася Пупкин</h3>
      <p className={styles.login}>pupkin@ya.ru</p>

      <Menu />

      <Button className={styles.btnLogout}>
        <span className={styles.btnLogoutIcon}>
          <img src="./logout.svg" />
        </span>
        Выйти
      </Button>
    </div>
  );
}

export default Sidebar;
