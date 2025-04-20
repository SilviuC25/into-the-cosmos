export default function Footer() {
  return (
    <footer className="bg-[#e8f0fe] text-gray-700 mt-20 text-center">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Into the Cosmos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
