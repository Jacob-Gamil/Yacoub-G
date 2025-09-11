import { useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Contact() {
  const form = useRef();
  const [name, setTheName] = useState("");
  const [email, setTheEmail] = useState("");
  const [message, setTheMessage] = useState("");

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#whatNext",
      {
        x: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#whatNext",
          toggleActions: "play none none reverse",
          start: "top 80%",
        },
        duration: 0.5,
        x: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      ".getInToush",
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".getInToush",
          toggleActions: "play none none reverse",
          start: "top 75%",
        },
        delay: 0.3,
        stagger: 0.3,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      "#theForm",
      {
        y: 20,
        scale: 0.8,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#theForm",
          toggleActions: "play none none reverse",
          start: "top 70%",
        },
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_4z2tr69", "template_1vuyb2h", form.current, {
        publicKey: "kb4a3KO8I95-j9F25",
      })
      .then(
        () => {
          toast.success(
            "Successfully sent!",
            {
              icon: "👍",
              style: {
                borderRadius: "10px",
                border: "1px solid #fff",
                background: "#121212",
                color: "#fff",
                padding: "10px",
              },
            },
            {}
          );
          document.getElementById("myForm").reset();
        },
        () => {
          toast.error("Email not sent!", {
            icon: "❌",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      );
  };

  return (
    <div className=" w-full mb-[5rem]">
      <div id="contact" className=" mt-[10rem]">
        <h1
          id="whatNext"
          className=" text-[#ccd6f6] text-[1.5rem] font-semibold capitalize flex items-center"
        >
          <span className=" w-1 h-1 rounded-full block bg-primary mx-2"></span>
          What’s
          <span className=" text-primary mx-1.5">Next?</span>
          <span className=" w-[20%] h-[0.1px] mx-4 md:w-[20%] block opacity-40 bg-[#ccd6f6]"></span>
        </h1>

        <div className=" flex flex-col justify-center items-center">
          <h1 className=" getInToush text-[#ccd6f6] text-3xl font-bold mt-8">
            Get In Touch
          </h1>
          <h1 className=" getInToush text-[#a8b2d1] font-extralight text-[1rem] p-1 md:max-w-[60%] lg:max-w-[50%] text-center">
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </h1>
        </div>
      </div>

      <form
        id="theForm"
        ref={form}
        onSubmit={sendEmail}
        className=" md:max-w-[60%] mx-auto flex justify-center flex-col items-center gap-10 mt-[2rem] w-full"
      >
        <div className="relative w-full ">
          <input
            type="text"
            id="user_name"
            name="user_name"
            required="required"
            placeholder=" "
            onChange={(e) => setTheName(e.target.value)}
            className=" w-full peer px-4 py-2 rounded-xl outline outline-[#ccd6f6] focus:ring-[#ccd6f6]"
          />
          <label
            htmlFor="user_name"
            className={`absolute left-4 duration-300 opacity-60 ${
              name ? "-top-6 text-sm " : "top-1.5 text-[1rem]"
            } peer-focus:-top-6 peer-focus:peer-focus:left-4 peer-focus:text-sm`}
          >
            Name
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="email"
            id="user_email"
            name="user_email"
            required="required"
            placeholder=" "
            onChange={(e) => setTheEmail(e.target.value)}
            className=" peer w-full peer px-4 py-2  rounded-xl outline outline-[#ccd6f6] focus:ring-[#ccd6f6]"
          />
          <label
            htmlFor="user_email"
            className={`absolute left-4 duration-300 opacity-60 ${
              email ? "-top-6 text-sm" : "top-1.5 text-base"
            } peer-focus:-top-6 peer-focus:peer-focus:left-4 peer-focus:text-sm`}
          >
            Email
          </label>
        </div>
        <div className="relative w-full ">
          <textarea
            type="textarea"
            id="message"
            name="message"
            placeholder=" "
            onChange={(e) => setTheMessage(e.target.value)}
            className=" peer h-[10rem] w-full peer px-4 py-2 rounded-2xl outline outline-[#ccd6f6] focus:ring-[#ccd6f6]"
          />
          <label
            htmlFor="name"
            className={`absolute left-4 duration-300 opacity-60 ${
              message ? "-top-6 text-sm" : "top-1.5 text-[14px]"
            } peer-focus:-top-6 peer-focus:peer-focus:left-4 peer-focus:text-sm`}
          >
            Message
          </label>
        </div>
        <div className=" -mt-[3rem]">
          <button
            type="submit"
            className=" group w-fit flex gap-1 items-center text-[1rem] font-extralight tracking-wider hover:px-4 duration-300 opacity-100 mt-10 cursor-pointer text-primary transition-all border-b"
          >
            {" "}
            Send
            <span className=" group-hover:rotate-0 duration-300 text-xs rotate-45">
              <FaLocationArrow />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
