import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { updateContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks/useContacts';
import { Button } from 'components/Button';
import { Form, Label, Input } from './StyledUpdateContactForm';

export const UpdateContactForm = ({
  contactId,
  contactName,
  contactNumber,
  closeModal,
}) => {
  const { isLoading, error } = useContacts();

  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);
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
    setName(name);
    setNumber(number);

    dispatch(updateContact({ contactId, name, number }));

    closeModal();

    if (error) {
      toast.error('Something happened. Please try again later');
    }
    toast.success(`Update contact ${name} `);
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

      <Button disabled={isLoading || clearInput}>Update contact</Button>
    </Form>
  );
};

UpdateContactForm.propTypes = {
  contactId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
