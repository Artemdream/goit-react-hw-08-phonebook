import { Bars, Puff } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Bars
      height="30"
      width="30"
      color="rgb(255, 69, 0)"
      marginLeft="auto"
      marginRight="auto"
      wrapperStyle={{ display: 'flex', alignItems: 'center' }}
    />
  );
};

export const PreLoader = () => {
  return (
    <Puff
      height="80"
      width="80"
      radius={1}
      color="rgb(255, 69, 0)"
      ariaLabel="puff-loading"
      wrapperStyle={{ marginLeft: '50%', marginTop: '50%' }}
      wrapperClass=""
      visible={true}
    />
  );
};
