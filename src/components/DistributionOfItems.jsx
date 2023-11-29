import { useState , useEffect, useRef} from "react"
import FakeData from "../FakeData.json"


function DistributionOfItems() {

  const defaultValue = new Date().toISOString().slice(0,10)
  
  const options = {
    2: ["פיתוח", "אוטומציה", "אחרי מערכת"],
    5: FakeData.map(item => item.sirialNum),
    10: ["בוצא", "ממתין למשיכה", "בוטל"],
  }
  const formRef= useRef()

  const handelSubmit = (e) => {
    e.preventDefault();
    
    const transfer = JSON.stringify(itemData)
    console.log(transfer)
    

    setSelectItem(null)
    setItemData({amount: null, itemName: null, description: null})
    setNeedItem(null)
    formRef.current.reset()
    
  }

  const [selectItem, setSelectItem] = useState(null)
  const [itemData, setItemData] = useState({amount: null, itemName: null, description: null})
  const [needItem, setNeedItem] = useState(null)

  useEffect(() => {
    FakeData.forEach(item => {
      if(item.sirialNum == selectItem) {
        setItemData({
          amount: item.amount,
          itemName: item.itemName,
          description: item.description,
          sirialNum: item.sirialNum,
          reqNum: Number(needItem)
        });
        return;
      }
    });
  }, [selectItem, needItem])

  return (
    <section  dir='rtl' className=' text-[16px] text-right flex-col items-center justify-center flex h-[80vh] w-4/5'>
      <h5 className="text-[22px] text-right">בקשת פריטים</h5>
      <div>תאריך שינוי אחרון</div>
      <form ref={formRef} onSubmit={handelSubmit} className='bg-gray-400 rounded-lg w-[95%] flex flex-row p-2 place-items-center justify-center shadow-lg'>
        <div className="w-full flex flex-row place-items-center justify-center">
          <div className="flex-col flex text-center w-[7%] mb-2 p-2">
            <label className="font-bold">מס"ד</label>
            <p id='masad' className="mt-2"> 1.</p>
          </div>
          <div className="flex-col flex text-center w-[10%] p-2">
            <label className="font-bold">תאריך</label>
            <input id='date'  type="date" autoComplete="off" required defaultValue={defaultValue} className="my-2 pr-1 rounded-md focus:outline-none"/>
          </div>
          <div className="flex-col flex text-center w-[12%] mb-2 p-2">
            <label className="font-bold">מחלקה/יחידה</label>
            <select id="mahlakaYehita" className="mt-2 rounded-md h-6 focus:outline-none">
              <option value="">בחר אפשרות</option>
              {options[2].map((item, index) =>(
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex-col flex text-center w-1/12 p-2">
            <label className="font-bold">מ.א גרם משיכה</label>
            <input id="couse" type="text" autoComplete="off" required className="my-2 pr-1 rounded-md focus:outline-none"/>
          </div>
          <div className="flex-col flex text-center w-[7.5%] p-2">
            <label className="font-bold">שם מלא</label>
            <input id="fullName"  type="text" autoComplete="off" required className="my-2 pr-1 rounded-md focus:outline-none"/>
          </div>
          <div className="flex-col flex text-center w-[12%] mb-2 p-2">
            <label className="font-bold">מק"ט</label>
            <select id="meket" required className="mt-2 rounded-md h-6 focus:outline-none" onChange={(e) => setSelectItem(e.target.value)} >
              <option value="">בחר אפשרות</option>
              {options[5].map((item, index) =>(
                <option required key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex-col flex text-center w-[6%] p-2">
            <label className="font-bold">כמות</label>
            <input id="amount" type="text" autoComplete="off" required  className="my-2 pr-1 rounded-md focus:outline-none" onChange={(e) => setNeedItem(e.target.value)} />
          </div>
          <div className="flex-col flex text-center w-[7%] p-2">
            <label className="font-bold">סוג פריט</label>
            <input id="typeOfItem" type="text" autoComplete="off" required defaultValue={itemData.itemName} className="my-2 pr-1 rounded-md focus:outline-none" disabled/>
          </div>
          <div className="flex-col flex text-center w-[12%] p-2">
            <label className="font-bold">פירוט מורחב של הפריט</label>
            <input id="decription" type="text" autoComplete="off" required defaultValue={itemData.description} className="my-2 pr-1 rounded-md focus:outline-none" disabled/>
          </div>
          <div className="flex-col flex text-center w-1/12 p-2">
            <label className="font-bold">הערות</label>
            <input id="notes" type='text' autoComplete="off" className="my-2 pr-1 rounded-md focus:outline-none"/>
          </div>
          <div className="flex-col flex text-center w-[12%] p-2 mb-2">
            <label className="font-bold">סטטוס</label>
            <select id="status" className="mt-2 rounded-md h-6" >
              <option value="">בחר אפשרות</option>
              {options[10].map((item, index) =>(
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex-col flex text-center w-40 mb-2 p-2">
            <label className="font-bold">שליחת טופס</label>
            <button id="sendData" className="mt-2 bg-white rounded-md px-1 w-full  hover:bg-slate-200">שלח בקשה</button>
          </div>
        </div>
        
      </form>
    </section>
  )
}

export default DistributionOfItems

{/* <div dir='rtl' className='text-[16px] items-center justify-center flex h-[60vh]'>
      <div className='bg-gray-400 rounded-lg w-[95%]'>
        <div className="flex">
          {headers.map((header, index) => (
            <div key={index} className="p-4">
              <div className="text-center">
                {header.name}
                {(index === 2 || index === 5 || index === 10) ? (
                  <select className="mt-2 rounded-md h-6" onChange={(e) => setSelectItem(e.target.value)}>
                    <option value="" >
                      בחר אפשרות
                    </option>
                    {options[index].map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  index === 0 ? <p className="mt-2">{index + 1}.</p> : (
                    <input className=" w-auto mt-2 pr-1 rounded-md" type={header.type} defaultValue={header.title !== null ? itemData[header.title] : undefined} disabled={index === 7 || index === 8}/>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}

      // const headers = [
  //   {
  //     name:'מס"ד',
  //   },
  //   {
  //     name:'תאריך',
  //     type:'date',
  //     defaultValue: new Date().toISOString().slice(0,10),
  //   },
  //   {
  //     name:'מחלקה/יחידה',
  //     type:'text',
  //   },
  //   {
  //     name:'מ.א גורם משיכה',
  //     type:'text',
  //   },
  //   {
  //     name:'שם מלא',
  //     type:'text',
  //   },
  //   {
  //     name:'מק"ט',
  //     type:'text',
  //   },
  //   {
  //     name:'כמות',
  //     type:'text',
  //     title:'amount',
  //   },
  //   {
  //     name:'סוג פריט',
  //     type:'text',
  //     title:'itemName',
  //   },
  //   {
  //     name:'פירוט מורחב של הפריט',
  //     type:'text',
  //     title:'description',
  //   },
  //   {
  //     name:'הערות',
  //     type:'text',
  //   },
  //   {
  //     name:'סטאטוס',
  //     type:'text',
  //   },
  //   {
  //     name:'שלח תופס',
  //     type:'text',
  //   },
  // ]

