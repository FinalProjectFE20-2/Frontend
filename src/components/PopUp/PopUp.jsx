import { NavLink } from 'react-router-dom';

function PopUp() {
  return (
    <div>
      <NavLink to="profile">Profile</NavLink>
      <button>Logout</button>
    </div>
  );
}

export default PopUp;
