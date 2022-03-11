import { Login, UserHome } from '../pages/index'
import { NotFound } from '../commponents'

const Routes = [
  {
    path: '/user',
    component: UserHome,
  },
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/*',
    component: NotFound,
  },
]

export default Routes
