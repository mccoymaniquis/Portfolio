import React, { ReactElement } from 'react'
import Modal from '../Modal'
import { useForm, SubmitHandler } from 'react-hook-form'
import Input from '../Forms/Input/Input'
import { LoginFormValues } from '../types/LoginFormValues'

interface LoginModalProps {
  isOpenModal: boolean
  setIsOpenModal: (isOpenModal: boolean) => void
  loginTitle: string
}

const LoginModal = (props: LoginModalProps): ReactElement => {
  const { isOpenModal, setIsOpenModal, loginTitle } = props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  // Correct usage of SubmitHandler
  const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues) => {
    console.log(data)
  }

  return (
    <>
      <Modal
        isOpenModal={isOpenModal}
        onCloseModal={() => setIsOpenModal(false)}
        hasCloseButton={true}
        modalSizeClass='max-w-[480px] h-[300px]'
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='px-12 flex justify-center items-center flex-col w-full h-full space-y-2'
          autoComplete='off'
        >
          <div>{loginTitle}</div>
          <Input
            label='Username'
            name='username'
            required={true}
            className=''
            labelClassName=''
            placeholder='Username'
            register={register}
            errors={errors}
          />
          <Input
            label='Password'
            name='password'
            required={true}
            className=''
            labelClassName=''
            placeholder='Password'
            register={register}
            errors={errors}
          />
          <div className='w-full'>
            <button
              type='submit'
              className='bg-gray-900 text-[#fff] p-2 w-full rounded-md hover:bg-gray-800'
            >
              Login
            </button>
            <span className='text-[12px] flex justify-end'>
              Don't have an account? Register here...
            </span>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default LoginModal
