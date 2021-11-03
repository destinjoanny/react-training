import React, {Fragment, useState} from 'react'
import TitleComponent from '../inline/TitleComponent'
import ButtonKlik from './Button'

export default function TransferApp() {
  const [balance, setBalance] = useState(0)

  const save1000 = (value) => {
    setBalance(balance + value)
    setTimeout(() => {
      alert(`Terima kasih, saldo anda bertambah ${value}, menjadi ${balance+value}`)
    }, 1200)
  }

  const save5000 = (value) => {
    setBalance(balance + value)
    setTimeout(() => {
      alert(`Terima kasih, saldo anda bertambah ${value}, menjadi ${balance+value}`)  
    }, 1500);
  }

  const withdrw1000 = (value) => {
    const confirmation = window.confirm('Apakah anda yakin?')
    if(balance > 0 ){
      if(confirmation){
        setBalance(balance - value)
        alert(`Saldo anda berkurang ${value}, sekarang jadi ${balance-value}`)
      } else {
        alert('OK, gajadi')
      }
    } else if (!confirmation){
      alert('OK, gajadi')
    } else {
      alert('Saldo ndak Cukup')
    }
  }

  return (
    <div className="bg-gray-100 w-2/4 my-16 p-8 rounded m-auto">
      <TitleComponent text={`Saldo anda adalah : Rp. ${balance}`} /> 
      <br />
      <hr />
      <div className="mt-2.5">Apakah mau tambah saldo?</div>
      <br />
      <button onClick={() => save1000(1000)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2.5 mb-4">Tambah Rp.1000</button>
      <button onClick={() => save5000(5000)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2.5 mb-4">Tambah Rp.5000</button>
      <hr />
      <div className="mt-2.5">Apakah mau tarik saldo?</div>
      
      <br/>
      {/* <button onClick={() => this.tarikSaldo1000()}>Tarik Rp.1000</button> */}
      <button onClick={() => withdrw1000(1000)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Tarik Rp.1000</button>
      {/* <ButtonKlik klik={() => withdrw1000(1000)} text={"Tarik Rp. 1000"} color={"Red"}/> */}
    </div>
  )
}
