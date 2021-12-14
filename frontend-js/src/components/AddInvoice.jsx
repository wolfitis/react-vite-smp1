import { useState } from 'react';

const AddInvoice = ({invoice}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const [amount, setAmount] = useState('0');
  const [due, setDue] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if(!(name || number || amount || due)) {
      alert('Please add missing value');
      return;
    }

    invoice({name, number, amount, due});

    // setName('');
    // setNumber(0);
    // setAmount('0');
    // setDue('');

  }
  return(
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
  );
}

export default AddInvoice;