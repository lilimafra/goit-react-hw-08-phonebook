import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';

import { logout } from '../../redux/auth/auth-operations';
import { useAuth } from '../../hooks/useAuth';
import { Menu, Button, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Menu>
      <IconContext.Provider value={{ color: '#0597f2' }}>
        <FaUserCircle />
      </IconContext.Provider>

      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logout())}>
        Log Out
      </Button>
    </Menu>
  );
};
