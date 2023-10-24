import * as React from "react"
import "../styles/components/BoxList.scss"

const BoxList = ({ one, two, three, four}) => (
  <div className="box-list">
    <div className="col">{one}</div>
    <div className="col">{two}</div>
    <div className="col">{three}</div>
    <div className="col">{four}</div>
  </div>
)

export default BoxList
