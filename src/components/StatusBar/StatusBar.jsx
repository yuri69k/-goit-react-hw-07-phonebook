import { useSelector, useDispatch } from 'react-redux';
import { selectContactsCount} from 'Redux/selectors';
import { sortContactsAz,
  sortContactsAzReverse,
  sortContactsByDate,
  sortContactsByDateReverse } from '../../Redux/contactsSlice';
import { Filter } from '../Filter/Filter';
import css from './StatusBar.module.css';
import sortIcon from '../../images/sort-az.png';
// import trashIcon from '../../images/trash.png';
import sortDateIcon from '../../images/sort-date.png'
import { useState } from 'react';

export const StatusBar = () => {
  const [sorted, setSorted] = useState({ sortedAlphabetically: false, sortedByDate: false });
  const dispatch = useDispatch();
  const { total } = useSelector(selectContactsCount);
  
  // const handleDeleteAllContacts = () => {
  //   dispatch(deleteAllContacts());
  // };
  const handleSortAzContacts = () => {
    if (sorted.sortedAlphabetically) {
      dispatch(sortContactsAzReverse());
      setSorted({ sortedAlphabetically: false, sortedByDate: false });
    } else {
      dispatch(sortContactsAz());
      setSorted({ sortedAlphabetically: true, sortedByDate: false });
    }
  };

  const handleSortDateContacts = () => {
    if (sorted.sortedByDate) {
      dispatch(sortContactsByDateReverse());
      setSorted({ sortedAlphabetically: false, sortedByDate: false });
    } else {
      dispatch(sortContactsByDate());
      setSorted({ sortedAlphabetically: false, sortedByDate: true });
    }
  };

  return (
    <div className={css.StatusBar}>
      <div className={css.infoSection}>
        <div className={css.counter}>
         
          <p className={css.counter__data}>
             You have {total} {total === 1 ? 'contact' : 'contacts'}
          </p>
        </div>
        {total > 0 && (
          <div className={css.buttons}>
            <button className={css.button_sort}
              type="button"
              title={sorted.sortedAlphabetically ? 'Sort by name Z-A' : 'Sort by name A-Z'}
              onClick={handleSortAzContacts}>
              <img src={sortIcon} alt="sort icon" className={css.icon} />
            </button>
            {/* <button className={css.button_delete}
              type="button"
              onClick={handleDeleteAllContacts}>
              <img src={trashIcon} alt="trash icon" className={css.icon} />
            </button> */}
            <button
              className={css.button_sort}
              type="button"
              X
              title={sorted.sortedByDate ? 'Sort by date added reverse' : 'Sort by date added'}
              onClick={handleSortDateContacts}
            >
              <img src={ sortDateIcon} alt="sort date icon" className={css.icon} />
            </button>
          </div>
        )}
      </div>
      <Filter />
    </div>
  );
};
