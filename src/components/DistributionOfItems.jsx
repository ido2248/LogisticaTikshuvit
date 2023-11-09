import { useState , useEffect } from "react"
import FakeData from "../FakeData.json"


function DistributionOfItems() {

  const defaultValue = new Date().toISOString().slice(0,10)
  
  const options = {
    2: ["פיתוח", "אוטומציה", "אחרי מערכת"],
    5: FakeData.map(item => item.sirialNum),
    10: ["בוצא", "ממתין למשיכה", "בוטל"],
  }

  const handelSubmit = ((e) => {
    console.log(e.target.value)
  })

  const [selectItem, setSelectItem] = useState(null)
  const [itemData, setItemData] = useState({amount: null, itemName: null, description: null})

  useEffect(() => {
    FakeData.forEach(item => {
      if(item.sirialNum == selectItem) {
        setItemData({
          amount: item.amount,
          itemName: item.itemName,
          description: item.description
        });
        return;
      }
    });
  }, [selectItem])

  return (
    <section  dir='rtl' className=' text-[16px] text-right flex-col items-center justify-center flex h-[60vh]'>
      <div>תאריך שינוי אחרון</div>
      <form onSubmit={handelSubmit} className='bg-gray-400 rounded-lg w-[93%] flex flex-col p-2 items-center justify-center mx-6'>
        <div className="grid grid-cols-12 justify-center place-items-center">
          <div className="flex-col flex text-center w-[80%] ">
            <label>מס"ד</label>
            <p id='masad' className="mt-2"> 1.</p>
          </div>
          <div className="flex-col flex text-center w-[80%]">
            <label>תאריך</label>
            <input id='date'  type="date" autoComplete="off" required defaultValue={defaultValue} className="my-2 pr-1 rounded-md"/>
          </div>
          <div className="flex-col flex text-center w-[80%] mb-2">
            <label>מחלקה/יחידה</label>
            <select id="mahlakaYehita" required className="mt-2 rounded-md h-6">
              <option value="">בחר אפשרות</option>
              {options[2].map((item, index) =>(
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex-col flex text-center w-[80%]">
            <label>מ.א גרם משיכה</label>
            <input id="couse" type="text" autoComplete="off" required className="my-2 pr-1 rounded-md"/>
          </div>
          <div className="flex-col flex text-center w-[80%]">
            <label>שם מלא</label>
            <input id="fullName"  type="text" autoComplete="off" required className="my-2 pr-1 rounded-md"/>
          </div>
          <div className="flex-col flex text-center w-[80%] mb-2">
            <label>מק"ט</label>
            <select id="meket" className="mt-2 rounded-md h-6" onChange={(e) => setSelectItem(e.target.value)}>
              <option value="">בחר אפשרות</option>
              {options[5].map((item, index) =>(
                <option required key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex-col flex text-center w-[80%]">
            <label>כמות</label>
            <input id="amount" type="text" autoComplete="off" required defaultValue={itemData.amount} className="my-2 pr-1 rounded-md"/>
          </div>
          <div className="flex-col flex text-center w-[80%] ml-3">
            <label>סוג פריט</label>
            <input id="typeOfItem" type="text" autoComplete="off" required defaultValue={itemData.itemName} className="my-2 pr-1 rounded-md" disabled/>
          </div>
          <div className="flex-col flex text-center w-full">
            <label>פירוט מורחב של הפריט</label>
            <input id="decription" type="text" autoComplete="off" required defaultValue={itemData.description} className="my-2 pr-1 rounded-md" disabled/>
          </div>
          <div className="flex-col flex text-center w-[80%] mr-3">
            <label>הערות</label>
            <input id="notes" type="text" autoComplete="off" required className="my-2 pr-1 rounded-md"/>
          </div>
          <div className="flex-col flex text-center w-[80%] mb-2">
            <label>סטטוס</label>
            <select id="status" className="mt-2 rounded-md h-6">
              <option value="">בחר אפשרות</option>
              {options[10].map((item, index) =>(
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex-col flex text-center w-[80%] mb-2">
            <label>שלח טופס</label>
            <button id="sendData" className="mt-2 bg-white rounded-md pr-1 pl-1 w-full">שלח בקשה</button>
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
                    <input className=" w-full mt-2 pr-1 rounded-md" type={header.type} defaultValue={header.title !== null ? itemData[header.title] : undefined} disabled={index === 7 || index === 8}/>
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

