import React from 'react'
import { message } from 'antd'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import Routes from './utils/routes'

message.config({
  top: 50,
  maxCount: 3,
})

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {Routes.map((item) => (
            <Route path={item.path} component={item.component} />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  )
}
