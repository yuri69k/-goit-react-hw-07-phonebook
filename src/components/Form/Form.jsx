


import { TiUserAddOutline } from 'react-icons/ti';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/API';
import { selectContacts} from 'Redux/selectors';
// const Form = ({ contacts, addContact }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const [isDisabled, setIsDisabled] = useState(false);
const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handleSubmit(evt) {
    evt.preventDefault();
    const form = evt?.target;
    const { name, phone } = form.elements;
    const contactName = name.value;
    const contactPhone = phone.value;

    if (
      !contacts?.length ||
      !contacts.some(contact => contact.name === contactName)
    ) {     
       dispatch(
      addContact({
        name:  contactName,
        phone: contactPhone,
      })
    );
      form.reset();
    } else {
      Notify.warning(`${contactName} ${ contactPhone} is already in contacts.`);
      form.reset();    
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="john doe"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 
          required
        />
      </label>
      <label>
        phone:
        <input
          type="tel"
          placeholder="+380 33 333 3333"
          className={styles.phoneInputCountry}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"         
          name="phone"          
          required
        />
      </label>

      <button
        className={styles.submitButton}
        type="submit"        
      >
        add contact
        <TiUserAddOutline size={20} className={styles.icon} />
      </button>
    </form>
  );
};



export default Form;
