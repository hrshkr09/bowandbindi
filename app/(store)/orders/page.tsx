
const OrderPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="max-w-2xl p-6 bg-white shadow-lg rounded-lg text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Feature Coming Soon!</h1>
      <p className="text-gray-600 mb-6">
        We are working hard to bring you a seamless order management experience. Stay tuned for updates.
      </p>
      <button
        className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Notify Me
      </button>
      <div className="mt-6">
        <img
          src="https://via.placeholder.com/500x300.png?text=Coming+Soon"
          alt="Coming Soon Illustration"
          className="rounded-md"
        />
      </div>
    </div>
  </div>
  );
}

export default OrderPage;
