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
export const routers:Routers[] = [
    {
        path:'/login',
        name:'登陆',
        key:'login',
        component:<Login />

    },
    {
        path:'/dashed',
        name:'显示',
        key:'dashed',
        component:<Dashed />

    }
]