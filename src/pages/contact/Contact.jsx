import React, { useRef, useState } from "react";
import { Header } from "../../components";
import { CiPhone } from "react-icons/ci";
import { AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";
import { toast } from "react-toastify";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config"; // Import your Firebase configuration

const Contact = () => {
   const formRef = useRef();
   const [loading, setLoading] = useState(false);

   const sendEmail = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         const formData = new FormData(formRef.current);
         const name = formData.get("username");
         const email = formData.get("email");
         const subject = formData.get("subject");
         const message = formData.get("message");

         // Save form data to Firestore
         await addDoc(collection(db, "contactForms"), {
            name,
            email,
            subject,
            message,
            timestamp: Timestamp.now(),
         });

         toast.success("Feedback Recorded. We will contact you shortly");
         formRef.current.reset(); // clear input fields
      } catch (error) {
         console.error("Error adding document: ", error);
         toast.error("Something went wrong. Please try again later");
      }

      setLoading(false);
   };

   return (
      <>
         <Header text="Contact Us" />
         <main className="w-full mx-auto px-2 lg:w-9/12 md:px-6 mt-4 lg:mt-6 flex flex-col md:flex-row justify-between gap-10">
            <section className="w-full md:w-[30rem] bg-primary-content rounded-md p-6 h-72">
               {/* Card */}
               <div className="mb-10">
                  <h1 className="text-xl md:text-3xl mb-2">
                     Contact Information
                  </h1>
                  <p className="md:text-lg">
                     Fill the form or contact us via other channels
                  </p>
               </div>
               <div>
                  <div className="flex items-center gap-2 my-2 md:text-xl">
                     <AiOutlineMail />
                     <a href="mailto: Support@eshop.com?subject=Feedback&body=message">
                       shaazhusain511@gmail.com
                     </a>
                  </div>
                  <div className="flex items-center gap-2  my-2 md:text-xl">
                     <CiPhone />
                     <a href="tel:+91-123-12345">+91-88005 81051</a>
                  </div>
                  <div className="flex items-center gap-2 md:text-xl  my-2">
                     <AiOutlineInstagram />
                     <a
                        href="https://www.instagram.com/__its_shaaz19?utm_source=qr&igsh=bXg4czlqbGJsMGUy"
                        rel="noreferrer"
                        target="_blank"
                     >
                       __its_shaaz19
                     </a>
                  </div>
                  <div className="flex items-center gap-2 md:text-xl  my-2">
                     <AiOutlineInstagram />
                     <a
                        href="https://www.instagram.com/_itz_ayub?utm_source=qr&igsh=dmY5NTJlbzM4bWox"
                        rel="noreferrer"
                        target="_blank"
                     >
                       _itz_ayub
                     </a>
                  </div>
               </div>
            </section>
            <section className="w-full md:w-2/3 rounded-md shadow-lg border-2 p-6">
               {/* Form */}
               <h1 className="text-xl md:text-3xl">Contact Us</h1>
               <form
                  className="form-control"
                  onSubmit={sendEmail}
                  ref={formRef}
               >
                  <div className="py-2">
                     <label className="label-text md:font-semibold mb-2 block text-lg">
                        Name :
                     </label>
                     <input
                        className="input input-bordered max-w-lg w-full border-2"
                        type="text"
                        placeholder="Full Name"
                        required
                        name="username"
                     />
                  </div>
                  <div className="py-2">
                     <label className="label-text md:font-semibold mb-2 block text-lg">
                        Email :
                     </label>
                     <input
                        className="input input-bordered max-w-lg w-full border-2"
                        type="email"
                        placeholder="Active Email"
                        required
                        name="email"
                     />
                  </div>
                  <div className="py-2">
                     <label className="label-text md:font-semibold mb-2 block text-lg">
                        Subject :
                     </label>
                     <input
                        className="input input-bordered max-w-lg w-full border-2"
                        type="text"
                        placeholder="Subject"
                        required
                        name="subject"
                     />
                  </div>
                  <div className="py-2">
                     <label className="label-text md:font-semibold mb-2 block text-lg">
                        Message :
                     </label>
                     <textarea
                        className="textarea textarea-bordered max-w-[100%] w-full"
                        rows={5}
                        required
                        name="message"
                     ></textarea>
                  </div>
                  <button className="btn max-w-xs w-full" type="submit">
                     Send Message
                  </button>
               </form>
            </section>
         </main>
      </>
   );
};

export default Contact;
