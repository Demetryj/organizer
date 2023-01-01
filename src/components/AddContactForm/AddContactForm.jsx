import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useContacts } from 'hooks/useContacts';
import { addContact } from 'redux/contacts/operations';
import { Button } from 'components/Button';
import { Form, Label, Input } from './StyledAddContactForm';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts, isLoading, error } = useContacts();
  const dispatch = useDispatch();

  const handleChangeInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const searchedContact = contacts.find(contact => contact.name === name);

    if (searchedContact) {
      toast.error(`${searchedContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));

    if (error) {
      toast.error(`Error! ${name} not added`);
    }
    toast.success(`${name} added to contacts`);

    setName('');
    setNumber('');
  };

  const clearInput = name === '' || number === '';

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="nameId">
        Name
        <Input
          id="nameId"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeInput}
          placeholder=" "
        />
      </Label>

      <Label htmlFor="telId">
        Phone
        <Input
          id="telId"
          type="tel"
          name="phone"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeInput}
          placeholder=" "
        />
      </Label>

      <Button disabled={isLoading || clearInput}>Add contact</Button>
    </Form>
  );
};
