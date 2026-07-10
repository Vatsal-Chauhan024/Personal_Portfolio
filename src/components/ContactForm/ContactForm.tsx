import emailjs from "@emailjs/browser"
import { memo, useRef, useState } from "react"
import { toast } from "react-toastify"

import InViewSplitText from "@/common/InViewSplitText/InViewSplitText"

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const formRef = useRef<null | HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    if (!formRef.current) return
    setLoading(true)
    emailjs
      .sendForm("service_25ulpy2", "template_ll1ajtx", formRef.current, "XPYeS0lTz05FFpgcx")
      .then(
        result => {
          if (result) {
            setLoading(false)
            setSubmitted(true)
            setTimeout(() => {
              setSubmitted(false)
              setEmail("")
              setMessage("")
            }, 5000)
          } else {
            toast.error("Error Submitting your response.")
          }
        },
        error => {
          setLoading(false)
          toast.error(error.text)
        }
      )
  }

  return !submitted ? (
    <form
      className="space-y-5 md:w-2/3 py-8 px-5 bg-surface border border-solid border-border rounded-md"
      onSubmit={e => {
        e.stopPropagation()
        e.preventDefault()
        handleSubmit()
      }}
      ref={formRef}
    >
      <InViewSplitText
        id="form_heading"
        type="chars"
      >
        <p
          className="text-white h2_heading"
          id="form_heading"
        >
          Reach Me Out
        </p>
      </InViewSplitText>
      <input
        className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-border
                    bg-surface
                    px-5
                    outline-none
                    transition-all
                    focus:border-primary
                    focus:shadow-purple-sm
                "
        name="to_name"
        onChange={e => setName(e.target.value)}
        placeholder="Full Name"
        required
        type="text"
        value={name}
      />
      <input
        className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-border
                    bg-surface
                    px-5
                    outline-none
                    transition-all
                    focus:border-primary
                    focus:shadow-purple-sm
                "
        name="reply_to"
        onChange={e => setEmail(e.target.value)}
        placeholder="Email Address"
        required
        type="email"
        value={email}
      />

      <textarea
        className="
            w-full
            resize-none
            rounded-2xl
            border
            border-border
            bg-surface
            px-5
            py-4
            outline-none
            transition-all
            focus:border-primary
            focus:shadow-purple-sm
            "
        name="message"
        onChange={e => setMessage(e.target.value)}
        placeholder="Tell me about your project..."
        required
        rows={7}
        value={message}
      />

      <button
        className="
                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-primary-light
                    disabled:opacity-50
                    disabled:pointer-events-none
                "
        disabled={loading || email.trim() === "" || message.trim() === "" || name.trim() === ""}
        type="submit"
      >
        {loading ? (
          <>
            <div className="mr-3 size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  ) : (
    <div
      className="
                flex
                h-85
                w-full
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-primary/20
                bg-surface
                text-center
            "
    >
      <div
        className="
                    mb-6
                    flex
                    size-20
                    items-center
                    justify-center
                    rounded-full
                    bg-primary/15
                    text-4xl
                "
      >
        ✓
      </div>

      <h3 className="font-heading text-2xl font-semibold">Message Sent</h3>

      <p className="mt-3 max-w-sm text-gray">
        Thanks for reaching out. I'll get back to you as soon as possible.
      </p>
    </div>
  )
}

export default memo(ContactForm)
