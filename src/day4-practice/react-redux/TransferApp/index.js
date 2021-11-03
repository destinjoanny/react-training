import React, {Fragment, useState} from 'react'
import TitleComponent from '../../../day2-practice/inline/TitleComponent'
import { useSelector, useDispatch } from 'react-redux'

export default function TransferApp() {
    const balance = useSelector(state => state.balance)
    const dispatch = useDispatch()

    return (
        <div className="bg-gray-100 w-2/4 my-16 p-8 rounded m-auto">
        <TitleComponent text={`Saldo anda adalah : Rp. ${balance}`} /> 
        <br />
        <hr />
        <div className="mt-2.5">Apakah mau tambah saldo?</div>
        <br />
        <button onClick={() => dispatch({type: "add1000"})} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2.5 mb-4">Tambah Rp.1000</button>
        <button onClick={() => dispatch({type: "add5000"})} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2.5 mb-4">Tambah Rp.5000</button>
        <hr />
        <div className="mt-2.5">Apakah mau tarik saldo?</div>
        
        <br/>
        {/* <button onClick={() => this.tarikSaldo1000()}>Tarik Rp.1000</button> */}
        <button onClick={() => dispatch({type: "withdraw1000"})} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Tarik Rp.1000</button>
        {/* <ButtonKlik klik={() => withdrw1000(1000)} text={"Tarik Rp. 1000"} color={"Red"}/> */}
        </div>
    )
}
