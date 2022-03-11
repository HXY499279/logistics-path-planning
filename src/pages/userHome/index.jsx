import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './index.module.css'
import { Header, Footer } from './commponents'
import Routes from './routes'

export function UserHome() {
  return (
    <div className={styles["userHome"]}>
      <Header />
      <div className={styles["home-content"]}>
        <Switch>
          {Routes.map((item) => (
            <Route path={`/user${item.path}`} component={item.component} />
          ))}
        </Switch>
      </div>
      <Footer />
    </div>
  )
}
