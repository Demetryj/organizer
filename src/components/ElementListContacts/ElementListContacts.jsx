import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { TfiWrite } from 'react-icons/tfi';
import { useContacts } from 'hooks/useContacts';
import { deleteContact } from 'redux/contacts/operations';
import { Modal } from 'components/Modal';
import { UpdateContactForm } from 'components/UpdateContactForm';
import { getFirstLetters } from 'utils/getFirstLetters';
import { getRandomColor } from 'utils/getRandomColor';
import {
  Wprapper,
  DataUser,
  Button,
  Circle,
} from './StyledElementListContacts';

export const ElementListContacts = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading, error } = useContacts();
  const dispatch = useDispatch();

  const initContact = getFirstLetters(name).toUpperCase();

  const handleDelete = () => {
    dispatch(deleteContact(id));

    if (error) {
      toast.error(`${name} not deleted`);
    }

    toast.success(`${name} deleted from contacts`);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const randomColor = useMemo(() => getRandomColor(), []);

  return (
    <>
      <Circle getColor={randomColor}>{initContact}</Circle>
      <Wprapper>
        <DataUser>{name}</DataUser>
        <DataUser>{number}</DataUser>
      </Wprapper>
      <Button type="button" onClick={openModal} disabled={isLoading}>
        <TfiWrite />
      </Button>
      <Button type="button" onClick={handleDelete} delete disabled={isLoading}>
        <MdDeleteForever />
      </Button>
      {isModalOpen && (
        <Modal onCloseModal={closeModal} isModalOpen={isModalOpen}>
          <UpdateContactForm
            contactId={id}
            contactName={name}
            contactNumber={number}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

ElementListContacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
