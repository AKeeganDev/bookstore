import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CheckStatus = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(checkStatus())} type="button">Check Status</button>
    </>
  );
};

export default CheckStatus;
