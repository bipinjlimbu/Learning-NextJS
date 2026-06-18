import wait from "@/lib/wait";

export default async function About() {
    await wait(5000);
    throw new Error("Testing error page");
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    About Us
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed">
                    Welcome to our application. This page provides information about
                    our project, its purpose, and the technologies used to build it.
                </p>

                <div className="mt-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}