import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'Redux/filterSlice';
import{selectFilter,selectContacts } from 'Redux/selectors'
import styles from './styles.module.css';
import clearIcon from '../../images/backspace.png';

// const Filter = ({ onFilterInput }) => {
//   const [filter, setFilter] = useState('');
//   useEffect(() => {
//     onFilterInput(filter);
//   }, [filter, onFilterInput]);
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onChange = e => dispatch(setFilter(e.currentTarget.value));
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        disabled={useSelector(selectContacts).length === 0}
      />
      {useSelector(selectFilter) && (
        <button
          className={styles.button}
          type="button"
          onClick={() => dispatch(setFilter(''))}
        >
          <img src={clearIcon} alt="clear icon" className={styles.icon} />
        </button>
      )}
    </div>
  );
};


export default Filter;
