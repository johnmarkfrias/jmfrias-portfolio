import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { RECIPIENT_EMAIL, INQUIRY_OPTIONS } from "../../data/contactData";

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setFormData((prev) => ({ ...prev, subject: subjectParam }));
      const formElement = document.getElementById("contact-form-container");
      if (formElement) {
        setTimeout(() => {
          formElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.fullName,
          Email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject || "New Message"}`,
          InquiryType: formData.subject,
          Message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <div id="contact-form-container" className="lg:col-span-7 scroll-mt-28">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-6"
      >
        <div className="border-b border-slate-100 pb-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Send me a message
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Fill in the details below and I’ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-2">
              Full Name <span className="text-blue-700">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-2">
              Email Address <span className="text-blue-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-2">
            Subject / Inquiry Type <span className="text-blue-700">*</span>
          </label>
          <div className="relative">
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select inquiry type...
              </option>
              {INQUIRY_OPTIONS.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-2">
            Message <span className="text-blue-700">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me a bit about your project, timeline, and goals..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 focus:bg-white transition-all resize-none"
          />
        </div>

        <div className="pt-2 flex flex-col gap-4">
          <div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 disabled:opacity-60 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              {status === "loading" ? "Sending message..." : "Send Message"}
            </button>
          </div>

          {status === "success" && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
              Thank you! Your message has been sent directly to my inbox. I'll get back to you shortly.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium">
              Oops! Something went wrong sending your message. Please try again or email me directly at {RECIPIENT_EMAIL}.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}