/**
 * @author  :spark Hou
 * @date  : 2019-09-20 11:03
 * @Description :
 */
import Index from "../components/Index/Index"
import Login from "../components/Login/Login"

/*{
    path: "/topics",
    component: Topics,
    exact: true,
    routes: [
    {
        path: "/topics/bus",
        component: Bus
    }
]
}*/

export const routes = [
    {
        path: "/",
        component: Index,
        exact: true,
        routs: []
    },
    {
        path: "/login",
        component: Login,
    }
]