import { useState } from 'react';

const AddInvoice = ({invoice, dataaaaa}) => {
  const [name, setName] = useState('tt');
  const [number, setNumber] = useState(0);
  const [amount, setAmount] = useState('0');
  const [due, setDue] = useState('tty');
// console.log("setInvoices",dataaaaa())
  const onSubmit = e => {
    e.preventDefault();

    if(!(name && number && amount && due)) {
      alert('Please add missing value');
      return;
    }

    invoice({name, number, amount, due});
    // dataaaaa({name, number, amount, due})
    // kks()

    setName('');
    setNumber(0);
    setAmount('0');
    setDue('');

  }
  return(
    <>
    <form onSubmit={onSubmit}>
    <label>Name</label>
    <input type='text' placeholder='Enter name' value={name} onChange={e=> setName(e.target.value)} />
    <label>Number</label>
    <input type='number' placeholder='Enter number' value={number} onChange={e=> setNumber(e.target.value)} />
    <label>Amount</label>
    <input type='text' placeholder='Enter amount' value={amount} onChange={e=> setAmount(e.target.value)} />
    <label>Due</label>
    <input type='text' placeholder='Enter due date' value={due} onChange={e=> setDue(e.target.value)} />

    <input type='submit' value='Save Invoice' />
    </form>
    {/* <p>{dataaaaa(name)}</p> */}
    </>
  );
}

export default AddInvoice;