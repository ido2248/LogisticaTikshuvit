import { useState , useEffect } from "react"
import FakeData from "../FakeData.json"


function DistributionOfItems() {


  const options = {
    2: ["פותוח","אוטומציה", "אחרי מערכת"],
    5: FakeData.map(item => item.sirialNum),
    10: ["בוצא","ממתין למשיכה", " בוטך"],
  }
  const headers = [
    {
      name:'מס"ד',
    },
    {
      name:'תאריך',
      type:'date',
    },
    {
      name:'מחלקה/יחידה',
      type:'text',
    },
    {
      name:'מ.א גורם משיכה',
      type:'text',
    },
    {
      name:'שם מלא',
      type:'text',
    },
    {
      name:'מק"ט',
      type:'text',
    },
    {
      name:'כמות',
      type:'text',
      title:'amount',
    },
    {
      name:'סוג פריט',
      type:'text',
      title:'itemName',
    },
    {
      name:'פירוט מורחב של הפריט',
      type:'text',
      title:'description',
    },
    {
      name:'הערות',
      type:'text',
    },
    {
      name:'סטאטוס',
      type:'text',
    },
    {
      name:'תאריך שינוי אחרון',
      type:'text',
    },
  ]

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
    <div dir='rtl' className='text-[16px] items-center justify-center flex h-[60vh]'>
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
    </div>
  )
}

export default DistributionOfItems

{/* <div className='bg-gray-400 rounded-lg flex flex-row  mx-2 py-8'>
        <table>
          <thead>
            <tr className="py-6">
              {headers.map((header, index) => (
              <th key={index} className="p-2">{header.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
            {headers.map((header, index) => (
                <td key={index} className="p-2">
                  <input type={header.type} className=" max-w-[125px]"/>
                </td>
            ))}
            </tr>
          </tbody>
        </table>
      </div> */}