import PropTypes from 'prop-types';
import { Btn } from './StyledButton';

export const Button = ({ children, disabled }) => {
  return (
    <Btn type="submit" disabled={disabled}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  disabled: PropTypes.any,
};
