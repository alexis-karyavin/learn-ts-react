import { createBrowserRouter } from 'react-router-dom';
import { PATH } from '../constants/path';

import LoginForm from '../pages/LoginForm/LoginForm';
import Main from '../pages/Main/Main';

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <Main />,
    children: [
      {
        path: PATH.MAIN,
        element: <div> menu</div>
      }
    ]
  },
  {
    path: PATH.LOGIN,
    element: <LoginForm />
  },
  {
    path: '*',
    element: <div>ERROR PAGE</div>
  }
]);

export default router;
