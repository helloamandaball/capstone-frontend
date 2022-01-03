import React, { useContext, useEffect } from "react"
// import { useNavigate } from "react-router"
import { BillsContext } from "../bills/BillsDataProvider"
import { PaidCard } from "./PaidCard"
import "./Paid.css"

export const PaidList = () => {
  const { bills, getBills } = useContext(BillsContext)

//   const navigate = useNavigate()

  useEffect(() => {
    // console.log("BillList: useEffect - getBills")
    getBills()
  }, [])

  return (
    <>
      <div className="billsPaidContainer">
        <h4>Paid Bills:</h4>
        <div className="billsPaidList">
          <table className="billsPaid">
            <tbody>
              <tr>
                <td className="billNameColumn"><em>Bill:</em></td>
                <td className="billDateColumn"><em>Due Date:</em></td>
                <td className="billPaidColumn"><em>Paid:</em></td>
              </tr>
                {
                  //returns the bill Complete Card after filters/sorts by date
                  bills.filter(bill => bill.complete === true).sort((a,b) => {return new Date(a.date) - new Date (b.date)}).map(bill => 
                  <PaidCard key={bill.id} bill={bill} />)
                }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}