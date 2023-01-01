import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="rgba(11, 38, 222)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'absolute',
        left: '40%',
      }}
      visible={true}
    />
  );
};
