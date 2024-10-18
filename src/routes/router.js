import Main from '../pages/Main'
import Inner from '../pages/Inner'

export const Router = [
    {path: '/', element: <Main/>, exact: false},
    {path: '/inner', element: <Inner/>, exact: false}
]