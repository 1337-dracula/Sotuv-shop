import { useState } from "react";
import { PatternFormat } from "react-number-format";
import { useForm } from 'react-hook-form'

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(event) {
    event.preventDefault();
    alert(`Submitted with phone number: ${tel} and password: ${password}`)
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }} >
          <label>
            Phone tel
            <PatternFormat
              id='tel'
              format="+998 (##) ### ## ##"
              allowEmptyFormatting
              mask="_"
            />

          </label>

          {errors.tel && (
            <p style={{ color: 'crimson' }}>{errors.tel.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            password
            <input
              type="password"
              placeholder="*********"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 4,
                  message: "Password must be at least 4 chars",
                },
                maxLength: {
                  value: 12,
                  message: "Password must be at most 12 chars",
                },
              })}
            />
          </label>
          {errors.password && (
            <p style={{ color: 'crimson' }}>{errors.password.message}</p>
          )}

        </div>

        <button type="Submit">Create account</button>
      </form>
    </div>
  );
}
