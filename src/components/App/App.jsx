import styles from './styles.module.css';
import Form from '../Form';
import Contacts from '../Contacts';
import { StatusBar } from '../StatusBar/StatusBar';
import { Header } from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../Redux/API'
import { selectError } from '../../Redux/selectors';
import { Notification } from '../Notification/Notification';
import { useEffect } from 'react';

const App = () => {
   const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div className={styles.wrapper}>
       <Header />
      <Form />
      <h2>Contacts</h2>
      <StatusBar />
        {error && <Notification message={error} />}
      {!error && <Contacts />}
    </div>
  );
};

export default App;
