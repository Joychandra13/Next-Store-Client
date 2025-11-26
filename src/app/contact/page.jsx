export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-base-200">
      <div className="max-w-xl w-full bg-base-100 p-10 rounded-2xl shadow-md">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
          <p className="text-gray-600">
            We’re always here to help. Contact our team anytime.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full "
          />

          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full "
          />

          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full h-32 "
          ></textarea>

          <button className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
