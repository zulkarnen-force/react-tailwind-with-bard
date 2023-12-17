const Home = () => (
  <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
    <h1 className="text-center text-3xl font-bold mb-8">Welcome home!</h1>
    <div className="flex flex-wrap justify-center gap-4">
      <div className="bg-white p-4 rounded-md shadow-md w-64">
        <h2 className="text-2xl font-bold mb-2">Features</h2>
        <ul className="list-none space-y-2">
          <li className="text-gray-700">- Feature 1</li>
          <li className="text-gray-700">- Feature 2</li>
          <li className="text-gray-700">- Feature 3</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md w-64">
        <h2 className="text-2xl font-bold mb-2">Benefits</h2>
        <ul className="list-none space-y-2">
          <li className="text-gray-700">- Benefit 1</li>
          <li className="text-gray-700">- Benefit 2</li>
          <li className="text-gray-700">- Benefit 3</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Home;
