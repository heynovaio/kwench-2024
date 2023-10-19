import * as React from "react"

const ColumnText = ({ column1, column2 }) => {
  return (
    <div className='container'style={{display: 'flex', textAlign: 'left'}}>
      <div style={{width: '50%', maxWidth: '50%'}}>
        {column1}
      </div>
      <div style={{width: '50%', maxWidth: '50%'}}>
        {column2}
      </div>
    </div>
  )
}
export default ColumnText
