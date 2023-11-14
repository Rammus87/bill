export const billListData = {
    pay: [
      {
        type: 'foods',
        name: '餐飲',
        list: [
          { type: 'food', name: '餐費' },
          { type: 'drinks', name: '飲料' },
          { type: 'dessert', name: '零食' },
        ],
      },
      {
        type: 'taxi',
        name: '出行交通',
        list: [
          { type: 'taxi', name: '打車租車' },
          { type: 'longdistance', name: '旅行費' },
        ],
      },
      {
        type: 'recreation',
        name: '休閒娛樂',
        list: [
          { type: 'bodybuilding', name: '運動健身' },
          { type: 'game', name: '休閒玩樂' },
          { type: 'audio', name: '媒體影音' },
          { type: 'travel', name: '旅遊度假' },
        ],
      },
      {
        type: 'daily',
        name: '日常支出',
        list: [
          { type: 'clothes', name: '衣服褲子' },
          { type: 'bag', name: '鞋帽包包' },
          { type: 'book', name: '知識學習' },
          { type: 'promote', name: '能力提升' },
          { type: 'home', name: '家裝布置' },
        ],
      },
      {
        type: 'other',
        name: '其他支出',
        list: [{ type: 'community', name: '社區繳費' }],
      },
    ],
    income: [
      {
        type: 'professional',
        name: '其他支出',
        list: [
          { type: 'salary', name: '工資' },
          { type: 'overtimepay', name: '加班' },
          { type: 'bonus', name: '獎金' },
        ],
      },
      {
        type: 'other',
        name: '其他收入',
        list: [
          { type: 'financial', name: '理財收入' },
          { type: 'cashgift', name: '禮金收入' },
        ],
      },
    ],
  }
  
  export const billTypeToName = Object.keys(billListData).reduce((prev, key) => {
    billListData[key].forEach(bill => {
      bill.list.forEach(item => {
        prev[item.type] = item.name
      })
    })
    return prev
  }, {})