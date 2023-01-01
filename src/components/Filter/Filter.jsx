import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectFilterValue } from 'redux/filter/selectors';
import { WrapperFilter, Label, Input } from './StyledFilter';

export const Filter = () => {
  const valueFilter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <WrapperFilter>
      <Label htmlFor="filterId">
        Find contacts by name
        <Input
          id="filterId"
          type="text"
          name="filter"
          value={valueFilter}
          onChange={onChangeFilter}
          placeholder=" "
        />
      </Label>
    </WrapperFilter>
  );
};
