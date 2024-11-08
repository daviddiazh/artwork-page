'use client'

import React from 'react'
import { useForm } from '../hooks/useForm'
import styles from './styles.module.css'

export default function Contact () {

  const { name, phone, email, message, onInputChange } = useForm({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  return (
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
          <button className={styles.button}>Envíar</button>
        </div>
      </div>

      <div className={styles.contactInfo}>
        <p className={styles.name}>Beatriz Apellido</p>
        <p className={styles.location}>Envigado - Antioquia, Colombia</p>
        <p className={styles.phone}>+57 301 2279255</p>
      </div>
    </div>
  )
}