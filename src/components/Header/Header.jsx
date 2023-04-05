import styles from './Header.module.css';
import { BsJournalBookmark } from 'react-icons/bs';

export const Header = () => {
  return (
    <h1 className={styles.header}>    
          Phone book Redux  &nbsp; <BsJournalBookmark size={35} className={styles.icon} />   
    </h1>
  );
};
