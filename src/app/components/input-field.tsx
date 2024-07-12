'use client'

import React from 'react';
import { Field } from 'formik';

export interface InputFieldPrors 
extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldPrors) {
  return (
    <div className='flex flex-col'>
      {label && (
        <label htmlFor={id} className={'mb-2 text-base color-gray-900'}>
          {label}
        </label>)
      }
      <Field {...rest} id={id} className='p-3 h-11 text-sm rounder border-gray-300 shadow' />
    </div>
  )
}