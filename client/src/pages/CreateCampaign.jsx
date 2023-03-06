import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'

import {money} from '../assets'
import { CustomButton, FormField } from '../components'
import {checkIfImage} from '../utils'


const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });
  
  const handleFormFieldChange = (fieldName, e) => {
    setForm({...form, [fieldName]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  }

  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && 'Loader...'}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className='font-epiloge font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Start a Campaign</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className='flex flex-wrap gap-[40px]'>
          <FormField
            LabelName="Name *"
            placeholder="Write your name"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange ('name', e)}
          />
          <FormField
            LabelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange ('title', e)}
          />
        </div>

        <FormField
            LabelName="Story *"
            placeholder="Write your story"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange ('description', e)}
        />

        <div className='flex flex-wrap gap-[40px]'>
          <FormField
            LabelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange ('target', e)}
          />
          <FormField
            LabelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange ('deadline', e)}
          />
        </div>

        <FormField
            LabelName="Campaign image *"
            placeholder="Place image url"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange ('image', e)}
          />

        <div className='flex justify-center items-center mt-[40px]'>
          <CustomButton
            btnType='submit'
            title='Create new campaign'
            styles='bg-[#1dc071]'
          />
        </div>

        
      </form>

    </div>
  )
}

export default CreateCampaign