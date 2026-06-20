export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 p-4 mt-auto">
            <div className="container mx-auto text-center">
                &copy; {new Date().getFullYear()} MyStore. All rights reserved.
            </div>
        </footer>
    );
}