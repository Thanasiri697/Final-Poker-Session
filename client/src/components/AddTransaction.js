import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>เพิ่มเซสชั่นใหม่</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">ชื่อเซสชั่น</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">จำนวน(บาท)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn1">เพิ่มเซสชั่น</button>
      </form>
    </>
  )
}
