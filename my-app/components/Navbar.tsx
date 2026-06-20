export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <a href="/" className="text-white text-2xl font-bold">MyStore</a>
                <div className="space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white">Home</a>
                    <a href="/products" className="text-gray-300 hover:text-white">Products</a>
                    <a href="/about" className="text-gray-300 hover:text-white">About</a>
                    <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
                </div>
            </div>
        </nav>
    );
}