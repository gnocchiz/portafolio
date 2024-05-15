import { Suspense, useRef, useState } from "react"
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [loading, setLoading] = useState(false);
  
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Luka Ribarola",
        from_email: form.email,
        to_email: "lukaribarola@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setLoading(false);
        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });

        setTimeout(() => {
          hideAlert(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, [3000]);
      },
      (error) => {
        setLoading(false);
        console.error(error);
        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      }
    );

  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

      <form
      className='w-full flex flex-col gap-7 mt-14'
      onSubmit={handleSubmit}
      >
        <label className='text-black-500 font-semibold'>
            Name
            <input
            type='text'
            name='name'
            className='input'
            required
            value={form.name}
            onChange={handleChange}
            
            />
        </label>
        <label className='text-black-500 font-semibold'>
            Email
            <input
            type='email'
            name='email'
            className='input'
            required
            value={form.email}
            onChange={handleChange}
            
            />
        </label>
        <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea resize-none'
              value={form.message}
              onChange={handleChange}
              resize={"none"}
            />
          </label>
          <button
            type='submit'
            disabled={loading}
            className='btn'
            
          >
            {loading ? "Sending..." : "Submit"}
          </button>
      </form>
      </div>

    </section>
  )
}

export default Contact
