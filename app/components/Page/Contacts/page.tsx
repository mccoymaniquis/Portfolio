'use client'
import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import Form from '../../Forms/Form'
import Input from '../../Forms/Input/Input'
import Textarea from '../../Forms/Textarea/Textarea'

interface FormValues {
  fullname: string
  email: string
}

const Page = (): ReactElement => {
  const initialValues = {
    fullname: '',
    email: '',
  }
  const methods = useForm({
    defaultValues: initialValues,
  })

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch('http://localhost:8080/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert('Email sent successfully!')
      } else {
        alert('Failed to send email.')
        console.log(response)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('An error occurred.')
    }
  }

  return (
    <div className='py-12 px-12 bg-[#F0F3FF] rounded-md'>
      <Form methods={methods} onSubmit={onSubmit}>
        <div className='flex justify-between space-x-4'>
          <Input name='fullname' label='Fullname' required />
          <Input name='email' label='Email' required type='email' />
        </div>
        <div>
          <Textarea name='message' label='Message' />
        </div>
        <div className='flex justify-end'>
          <button
            className='rounded-sm btn btn-sm btn-secondary w-[150px] p-2'
            type='submit'
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default Page
