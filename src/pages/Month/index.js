import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import DailyBill from './component/DayBill'

const Month = () => {
    const [dataVisible, setDataVisible] = useState(false)
    const [currentDate, setCurrentDate] = useState(()=>{
        return dayjs(new Date()).format('YYYY-MM')
    })

    
    const billList = useSelector(state => state.bill.billList)
    const monthGroup = useMemo(()=>{
        return _.groupBy(billList,(item)=>dayjs(item.date).format('YYYY-MM'))
    },[billList])


    const [monthList , setMonthList] = useState([])
    const monthResult = useMemo(()=>{
        const pay = monthList.filter(item => item.type === 'pay').reduce((a,c)=>a+c.money,0)
        const income = monthList.filter(item => item.type === 'income').reduce((a,c)=>a+c.money,0)
        return {
            pay,
            income,
            total : pay + income
        }
    },[monthList])

    useEffect(()=>{
        const now = dayjs().format('YYYY-MM')
        if(monthGroup[now]){
            setMonthList(monthGroup[now])
        }
    },[monthGroup])
    

    const onConfirm = (date) => {
        setDataVisible(false)
        const formatDate = dayjs(date).format('YYYY-MM')
        console.log(formatDate)
        setMonthList(monthGroup[formatDate])
        setCurrentDate(formatDate)
    }

    const dayGroup = useMemo(()=>{
      const groupData = _.groupBy(monthList,(item)=>dayjs(item.date).format('YYYY-MM-DD'))
      const keys = Object.keys(groupData)
      return {
        groupData,
        keys
      }
    },[monthList])
    

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
              {currentDate + ""}月帳單
            </span>
            <span className={classNames('arrow' , dataVisible && 'expand')}></span>
          </div>
          {/* 統計 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
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
        {/* 渲染單日列表組件 */}
        {
          dayGroup.keys.map(key=>{
            return <DailyBill key={key} date={key} billList={dayGroup.groupData[key]} />
          })
        }
        
      </div>
    </div >
  )
}

export default Month