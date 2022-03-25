import { lazy, ReactNode } from "react"

export interface Routers {
    path:string,
    key:string,
    name:string,
    auth:boolean,
    component?:ReactNode,
    children?:Routers[]
}
const Login = lazy( () => import('../page/Login') )
const Error = lazy( () =>  import('../page/Error'))
const Layout = lazy( () => import('../page/Layout'))
const Look = lazy( () => import('../page/Look'))
const Dashed = lazy( () => import('../page/Dashed'))
export const routers:Routers[] = [
    {
        path:'/',
        name:'登陆',
        key:'login',
        auth:true,
        component:<Login />

    },
    {
        path:'/layout',
        name:'主页面',
        key:'layout',
        auth:false,
        component:<Layout />,
        children:[
            {
                path:'look',
                name:'看板',
                key:'look',
                auth:false,
                component:< Look/>,
            },
            {
                path:'dashed',
                name:'图表',
                key:'dashed',
                auth:false,
                component:<Dashed/>,
            },
          
        ]
    },
    {
        path:'*',
        name:'错误',
        key:'404',
        auth:false,
        component:<Error />
    }
]
