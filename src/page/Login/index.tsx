import { userInfo } from "os"
import React,{FormEvent} from "react"


import {Button, Card, Divider, Form,Input, Table} from 'antd'

import { useNavigate,useParams,useLocation}  from 'react-router-dom'
import './login.css'

const API = process.env.REACT_APP_API_URL

export  interface User {
    id:string,
    token:string,
    name:string
}
export interface sendData {
      username:string,
      password:string
}
const LoginScreen = (props:any)=>{
 
   
    const history = useNavigate()
    const parms = useParams()
    const location = useLocation()
   
    
    
 
        // const hanle = (e: FormEvent<HTMLFormElement>)=>{
        //     e.preventDefault()
        //     const username = (e.currentTarget.elements[0] as HTMLFormElement).value
        //     const password = (e.currentTarget.elements[1] as HTMLFormElement).value

         
        
       
        // }
        const submit = (values:{username:string,password:string})=>{
       
            history('/home',{
                state:{
                    datatas:9
                }
            })
            // login(values)
            
            
            
        }
    return (   
        <div id='big_div'>
            <div className='header_imag'></div>
            <div className='all_iamge'></div>
            <Card className='card_small'>
            <Form 
                size='small'  
                onFinish={submit}

            >
            <Form.Item
              
              name={'username'}
            
            >
                    <Input placeholder='用户名'  size="large" />

            </Form.Item>
            <Form.Item
              
                name={'password'}
            
              >
                      <Input placeholder='密码' size="large" type='password'/>
  
              </Form.Item>
              <Form.Item
              
            
            
              >
                      <Button type="primary" size="large" htmlType={"submit"} style={{width:'100%'}}> 登录</Button>
                      <Divider/>
                        <a href="http://">没有账号注册一个？点击注册</a>
              </Form.Item>
           
            </Form>
            </Card>
           
        </div>
    )
}
export default  LoginScreen

