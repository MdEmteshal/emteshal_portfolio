import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResponseMsg("");

    if (!formData.name || !formData.email || !formData.message) {
      return setResponseMsg("Please fill all required fields.");
    }

    try {
      setLoading(true);

      const res = await axios.post(backendUrl + "/api/contact", formData);

      setResponseMsg(res.data.message);

      setFormData({
        name: "",
        email: "",
        companyName: "",
        message: "",
      });
    } catch (error) {
      setResponseMsg(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 bg-slate-900 rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 bg-slate-900 rounded-xl"
          />

          <input
            type="text"
            name="companyName"
            placeholder="Company / Organization"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-4 bg-slate-900 rounded-xl"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 bg-slate-900 rounded-xl"
          />

          {responseMsg && <p className="text-sm text-center">{responseMsg}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 px-8 py-3 rounded-xl disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
