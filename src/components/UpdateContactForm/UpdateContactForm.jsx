import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { updateContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks/useContacts';
import { Button } from 'components/Button';
import { ErrorMessage } from 'components/ErrorMessage';
import { Form, Label, Input } from './StyledUpdateContactForm';

export const UpdateContactForm = ({
  contactId,
  contactName,
  contactNumber,
  closeModal,
}) => {
  const { isLoading, error } = useContacts();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      name: contactName,
      number: contactNumber,
    },
  });

  const handleUpdateContact = data => {
    const { name, number } = getValues();
    dispatch(updateContact({ contactId, name, number }));

    closeModal();

    if (error) {
      toast.error('Something happened. Please try again later');
    }
    toast.success(`Update contact ${name} `);
  };

  return (
    <Form onSubmit={handleSubmit(handleUpdateContact)}>
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
        Update contact
      </Button>
    </Form>
  );
};

UpdateContactForm.propTypes = {
  contactId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
