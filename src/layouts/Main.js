import React from 'react'
import { renderRoutes } from 'react-router-config'
import styles from './Main.scss'
import './Globals.scss'

const Main = ({ route }) => (
  <div className={styles.wrapper}>
    {renderRoutes(route.routes)}
  </div>
)

export default Main
