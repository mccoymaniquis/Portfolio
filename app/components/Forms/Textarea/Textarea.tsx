import React, { ReactElement } from 'react'
import { useFormContext } from '../FormContext'

interface InputProps {
  name: string
  label: string
  required?: boolean
  rows?: number
}

const Textarea: React.FC<InputProps> = (props: InputProps): ReactElement => {
  const { name, label, required = false, rows = 5 } = props
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className='flex flex-col w-full font-custom text-black'>
      <label htmlFor={name} className='font-custom'>
        {label}
        {required && <span className='text-red-600'>*</span>}
      </label>
      <textarea
        className={`border rounded-sm p-2 text-black resize-none ${
          errors[name] && 'border-red-500'
        }`}
        id={name}
        {...register(name, { required: required && `${label} is required` })}
        cols={50}
        rows={rows}
      />
      {errors[name] && (
        <p className='text-red-600 text-[14px]'>
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  )
}

export default Textarea
