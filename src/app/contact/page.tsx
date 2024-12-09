'use client'

import React from 'react'
import { toast, ToastContainer } from "react-toastify";
import { useForm } from '../hooks/useForm'
import styles from './styles.module.css'

import 'react-toastify/dist/ReactToastify.css';

export default function Contact () {

  const { name, phone, email, message, onInputChange } = useForm({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const sendMessage = async () => {
    try {
      toast.success('Bien hecho! Hemos recibido tu mensaje.')
      throw new Error('Error')
    } catch (error) {
      console.log({error})
      toast.error('Tuvimos un problema al recibir un mensaje.')
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              name='name'
              value={name}
              onChange={onInputChange}
              type='text'
              placeholder='Nombre'
              className={styles.input}
            />
            <input
              name='phone'
              value={phone}
              onChange={onInputChange}
              type='text'
              placeholder='Número de contacto'
              className={styles.input}
            />
            <input
              name='email'
              value={email}
              onChange={onInputChange}
              type='text'
              placeholder='Correo electrónico'
              className={styles.input}
            />
            <input
              name='message'
              value={message}
              onChange={onInputChange}
              type='text'
              placeholder='Mensaje'
              className={styles.input}
            />
            <button className={styles.button} onClick={sendMessage}>Envíar</button>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <p className={styles.name}>Beatriz Apellido</p>
          <p className={styles.location}>Envigado - Antioquia, Colombia</p>
          <p className={styles.phone}>+57 301 2279255</p>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}