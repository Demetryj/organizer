import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/operations';
import { AddContactForm } from 'components/AddContactForm';
import { ListContacts } from 'components/ListContacts';
import { Filter } from 'components/Filter';
import { Box } from 'components/Box';

const UserContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <main>
      <Box py={[4]} as="section">
        <Box
          display="flex"
          justifyContent="space-between"
          px={[4]}
          mx="auto"
          maxWidth={1400}
          as="div"
        >
          <AddContactForm typeSubmit={'Add contact'} />
          <Box display="flex" flexDirection="column" as="div">
            <Filter />
            <ListContacts />
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default UserContacts;
