export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
                    Contact Us
                </h1>

                <p className="text-center text-gray-600 mb-8">
                    Have a question or feedback? We'd love to hear from you.
                </p>

                <form className="space-y-5">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Write your message..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}