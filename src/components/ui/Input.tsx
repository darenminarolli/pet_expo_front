import React from 'react'

interface InputTypes{
    type:string
    className?:string
    placeholder?:string
    value?:string
    name: string
    onChange?:(e:any)=>void
}

const Input:React.FC<InputTypes> = ({type,className, placeholder,value,name, onChange }) => {
  return (
    <input 
    type={type} 
    value={value}
    name={name}
    className={'px-4 py-2 rounded-md focus:outline-none border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 '+ className} 
    placeholder={placeholder} 
    onChange={onChange} />
  )
}

export default Input
