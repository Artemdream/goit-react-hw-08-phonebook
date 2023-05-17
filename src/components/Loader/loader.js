import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Bars
      height="30"
      width="30"
      color="#ec6517"
      marginLeft="auto"
      marginRight="auto"
      wrapperStyle={{ display: 'flex', alignItems: 'center' }}
    />
  );
};
