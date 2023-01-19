import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useContacts } from 'hooks/useContacts';
import { addContact } from 'redux/contacts/operations';
import { Button } from 'components/Button';
import { ErrorMessage } from 'components/ErrorMessage';
import { Form, Label, Input } from './StyledAddContactForm';

export const AddContactForm = () => {
  const { contacts, isLoading, error } = useContacts();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    reset,

    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const handleAddContact = data => {
    const { name, number } = getValues();

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
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleAddContact)}>
      <Label htmlFor="nameId">
        Name
        <Input
          {...register('name', {
            required: 'Username is required.',
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message:
                'It may contain only letters, apostrophe, dash and spaces.',
            },
            minLength: {
              value: 2,
              message: 'Minimal length is 6 symbols',
            },
            maxLength: {
              value: 36,
              message: 'Maximal length is 36 symbols',
            },
          })}
          id="nameId"
          tape="text"
          placeholder=" "
          onChange={() => clearErrors('name')}
        />
        {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
      </Label>

      <Label htmlFor="numberId">
        Phone number
        <Input
          {...register('number', {
            required: 'Phone number is required.',
            pattern: {
              value:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,

              message:
                'It must be digits and can contain spaces, dashes, parentheses.',
            },

            minLength: {
              value: 6,
              message: 'Minimal length is 6 symbols',
            },
            maxLength: {
              value: 21,
              message: 'Maximal length is 21 symbols',
            },
          })}
          id="numberId"
          type="tel"
          placeholder=" "
          onChange={() => clearErrors('number')}
        />
        {errors.number && <ErrorMessage>{errors.number?.message}</ErrorMessage>}
      </Label>

      <Button disabled={errors.name || errors.number || isLoading}>
        Add contact
      </Button>
    </Form>
  );
};
