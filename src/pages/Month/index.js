import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'

const Month = () => {
    const [dataVisible, setDataVisible] = useState(false)
    const [currentDate, setCurrentDate] = useState(()=>{
        return dayjs(new Date()).format('YYYY-MM')
    })

    const onConfirm = (date) => {
        setDataVisible(false)
        const format = dayjs(date).format('YYYY-MM')
        setCurrentDate(format)
    }
    
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 時間切換區域 */}
          <div className="date" onClick={()=>setDataVisible(true) }>
            <span className="text">
              {currentDate + ""}帳單
            </span>
            <span className={classNames('arrow' , dataVisible && 'expand')}></span>
          </div>
          {/* 統計 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">結餘</span>
            </div>
          </div>
          {/* 時間選擇器 */}
          <DatePicker
            className="kaDate"
            title="記帳日期"
            precision="month"
            visible={dataVisible}
            onCancel={()=>setDataVisible(false)}
            onConfirm={onConfirm}
            onClose={()=>setDataVisible(false)}
            max={new Date()}
          />
        </div>
      </div>
    </div >
  )
}

export default Month