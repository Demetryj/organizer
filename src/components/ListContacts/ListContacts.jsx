import { ElementListContacts } from 'components/ElementListContacts';
import { Loader } from 'components/Loader';
import { useContacts } from 'hooks/useContacts';
import {
  WrapperListContacts,
  Text,
  List,
  ElementList,
} from './StyledListContacts';

export const ListContacts = () => {
  const { contacts, isLoading, error, visibleContacts } = useContacts();

  return (
    <WrapperListContacts>
      {error && <p>{error.message}</p>}

      {contacts.length > 0 && !error && (
        <List>
          {visibleContacts.map(({ name, number, id }) => (
            <ElementList key={id}>
              <ElementListContacts name={name} number={number} id={id} />
            </ElementList>
          ))}
        </List>
      )}

      {contacts.length === 0 && !error && !isLoading && (
        <Text>No contacts</Text>
      )}

      {isLoading && <Loader />}
    </WrapperListContacts>
  );
};
