import React from 'react'

function inputBox(
    {
    label,//for,to
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyoptions = [],//usd,inr,slr...
    selectedcurrency = "usd",
    amountdisabled  = false,
    currencydisabled = false,
    classes = " "
}) {
  return (
    // Here we are destructuring props — meaning, instead of writing props.label, props.amount, etc., you directly unpack them inside the parentheses.
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1-2'>
            <label className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
              type='number'
              className='outline-none w-full bg-transparent py-1.5'//removes the default blue outline when the input is focused.add vertical padding (top and bottom)
              placeholder='Amount'
              disabled={amountdisabled}
              value={amount}
              onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
              //(e) → The event object (from typing). e.target.value → The text (number) the user just typed Number(e.target.value) → Converts that string to a number
            />
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select 
              className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
              value={selectedcurrency}
              onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
              disabled={currencydisabled}
            >
                
            </select>

        </div>

    </div>
  )
}

export default inputBox