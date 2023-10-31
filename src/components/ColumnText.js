import * as React from "react"

const ColumnText = ({ column1, column2 }) => {
  return (
    <div className='container column-container'>
      <div className='column'>
        {column1}
      </div>
      <div className='column'>
        {column2}
      </div>
    </div>
  )
}
export default ColumnText
