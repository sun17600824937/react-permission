import { Suspense } from "react"
import { Routes , BrowserRouter as Router,Route} from "react-router-dom"

import { Routers, routers } from "../../router"


 const Views = () => {
        const Routerss = (route:Routers[]) => {

           return route.map((item) => {
                    if(item.children) {
                            return (
                            <Route path={item.path} element={item.component} key={item.key} >
                                        
                                        {
                                            Routerss(item.children)  
                                        }  
                                    
                                </Route>
                            )
                    } else {
                        return  <Route path={item.path} element={item.component} key={item.key} ></Route> 
                                                           
                    }

            })
        }
        return (
            <>
                
                <Suspense fallback={"shiwu"}>
                        <Router>
                            <Routes>
                                {
                                    Routerss(routers)
                                
                                }
                            </Routes>
                        </Router>
                        </Suspense>
               
            </>
        )


}

export default Views