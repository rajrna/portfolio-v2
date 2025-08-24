export default function Contact() {
  // You can replace the '#' in href with your actual PDF path, e.g. "/RajRana_Resume.pdf"
  return (
    <section className="max-w-xl mx-auto font-mono">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Contact & Resume</h2>

      {/* Download Resume Button */}
      <div className="mb-8">
        <a
          href="/RajRana_Resume.pdf"
          download
          className="px-6 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-black font-mono transition"
        >
          Download Resume (PDF)
        </a>
      </div>

      {/* Contact Form */}
      <form
        className="flex flex-col gap-5"
        action="https://formspree.io/f/yourformid" // or use your backend/email API
        method="POST"
      >
        <label className="flex flex-col text-sm">
          Name
          <input
            type="text"
            name="name"
            className="mt-1 px-2 py-1 border border-white bg-black text-white rounded"
            required
          />
        </label>
        <label className="flex flex-col text-sm">
          Email
          <input
            type="email"
            name="email"
            className="mt-1 px-2 py-1 border border-white bg-black text-white rounded"
            required
          />
        </label>
        <label className="flex flex-col text-sm">
          Message
          <textarea
            name="message"
            className="mt-1 px-2 py-1 border border-white bg-black text-white rounded min-h-[100px] resize-y"
            required
          />
        </label>
        <button
          type="submit"
          className="px-6 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-black font-mono transition"
        >
          Send Message
        </button>
      </form>
      <p className="mt-8 text-gray-400 text-center text-base">
        Or email me directly:{" "}
        <a
          href="mailto:youremail@example.com"
          className="text-red-500 underline"
        >
          youremail@example.com
        </a>
      </p>
    </section>
  );
}
