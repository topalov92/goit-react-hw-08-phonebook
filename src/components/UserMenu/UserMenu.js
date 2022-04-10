import { useSelector } from 'react-redux';

import { BsFillPersonCheckFill } from 'react-icons/bs';
import style from './UserMenu.module.css';
import * as authSelector from '../../redux/reduxAuth/authSelector';
import { useDispatch } from 'react-redux';
import ButtonBlack from '../Button/Button';
import * as authOperation from '../../redux/reduxAuth/authOperation';

const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(authSelector.getName);
  return (
    <div>
      <div className={style.Text}>Hello - {name}</div>
      <ButtonBlack
        type="button"
        onClick={() => dispatch(authOperation.logOut())}
      >
        LogOut
      </ButtonBlack>
      <BsFillPersonCheckFill className={style.Icon} />
    </div>
  );
};
export default UserMenu;