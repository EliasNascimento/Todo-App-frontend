import React from 'react'
import { BrowserRouter , Route, Switch} from 'react-router-dom'


import Todo from '../todo/todo'
import About from '../about/about'

export default props =>(
    <BrowserRouter  >        
            <Switch>
                <Route path='/' exact component={Todo}/>
                <Route path='/about' component={About}/>                                
                {/* <Redirect from='*' to='/todos' /> */}
            </Switch>                    
        </BrowserRouter>   
)


