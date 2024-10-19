

import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // This function gets called upon form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-6 sm:px-20 flex gap-5 mb-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full sm:w-[50%] pt-12 form-div">
        <h1 className="text-2xl font-bold">Get In Touch</h1>

        <div className="space-y-6">
          {/* Name Input Field */}
          <input
            type="text"
            placeholder="Enter your full name..."
            name="name"
            {...register('name', {
              required: 'Name is required!',
              maxLength: { value: 30, message: 'Name must not exceed 30 characters!' },
              minLength: { value: 3, message: 'Name must be at least Greater than 3 character!'},
              pattern: { value: /^[A-Za-z\s]+$/i, message: 'Name should not contain numbers or special characters!' },
            })}
            className="w-full outline-none focus:border-primary border-[2px] border-slate-200 rounded-md h-12 px-2"
          />
          {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}

          {/* Email Input Field */}
          <input
            type="email"
            placeholder="Enter your email address..."
            name="email"
            {...register('email', {
              required: 'Email is required!',
              pattern: {
                value: /^[a-zA-Z0-9._#%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                message: 'Invalid email address!',
              },
            })}
            className="w-full outline-none focus:border-primary border-[2px] border-slate-200 rounded-md h-12 px-2"
          />
          {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}

          {/* Subject Input Field */}
          <input
            type="text"
            placeholder="Enter a subject..."
            name="subject"
            {...register('subject', { required: 'Subject is required!' })}
            className="w-full outline-none focus:border-primary border-[2px] border-slate-200 rounded-md h-12 px-2"
          />
          {errors.subject && <span className="text-sm text-red-500">{errors.subject.message}</span>}

          {/* Message Textarea Field */}
          <textarea
            name="message"
            placeholder="Enter your message..."
            {...register('message')}
            className="w-full outline-none focus:border-primary border-[2px] border-slate-200 rounded-md h-[105px] px-2 py-1"
          ></textarea>

          {/* Submit Button */}
          <button className="w-full rounded-md submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
