import styles from './styles.module.css';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact} from 'Redux/API';

import userIcon from '../../images/user.png';
import telephoneIcon from '../../images/telephone.png';
import { Notification } from 'components/Notification/Notification';
import {
  selectIsLoading,
  selectFilteredContacts,
 selectFilter,
  selectContactsCount,
} from '../../Redux/selectors';

const Contacts = () => {
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contactsCount = useSelector(selectContactsCount);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);
 
 
 
  return (
    <>
        {!isLoading && contactsCount.total === 0 ? (
        <Notification message="No contacts yet" />
      ) : filter !== '' && filteredContacts.length === 0 ? (
        <Notification message="No contacts found" />
      ) : (
      <ul className={styles.contactsList}>
        {filteredContacts.map(({ name, id,phone }) => (
          <li className={styles.listItem} key={id} id={id}>
              <img src={userIcon} alt="user icon" className={styles.user_icon} />
            <span className={styles.contactName}>{name}: </span>
            <span className={styles.phoneNumber}>{phone}
            <a href={`tel:${phone}`}>
            <img src={telephoneIcon} alt="telephone icon" className={styles.telephone_icon} />
              </a>
              </span>
            <button
              type="button"
              className={styles.buttons}
              onClick={() => dispatch(deleteContact(id))}
              aria-label="delete contact button"
            >
              <TiUserDeleteOutline size={20} />
            </button>
          </li>
        ))}
        </ul>
              )}
      
    </>
  );
};

export default Contacts;

