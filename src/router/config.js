/**
 * @author  :spark Hou
 * @date  : 2019-09-20 11:03
 * @Description :
 */
import Index from "../components/Index/Index"
import Login from "../components/Login/Login"
import PersonalInfo from "../components/personalCenter/PersonalInfo/PersonalInfo"


export const routes = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/",
        component: Index,
        routes: [
            {
                path: ["/", "/personalCenter/personalInfo"],
                component: PersonalInfo
            }
        ]
    },
]