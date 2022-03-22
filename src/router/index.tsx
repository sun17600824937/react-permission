import { lazy, ReactNode } from "react"

export interface Routers {
    path:string,
    key:string,
    name:string,
    component?:ReactNode,
    children?:Routers[]
}
const Login = lazy( () => import('../page/Login') )
const Dashed = lazy( () => import('../page/Dashed'))
const Error = lazy( () =>  import('../page/Error'))
export const routers:Routers[] = [
    {
        path:'/',
        name:'登陆',
        key:'login',
        component:<Login />

    },
    {
        path:'/dashed',
        name:'显示',
        key:'dashed',
        component:<Dashed />

    },
    {
        path:'*',
        name:'错误',
        key:'404',
        component:<Error />
    }
]