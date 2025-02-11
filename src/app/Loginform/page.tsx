 
export default function Login () {
    return (
      <>
        <main className="bg-lime-950 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-lime-900 font-bold text-4xl text-center mb-6">
            Login Form
          </h1>
          <form action={"submit"} className="space-y-4">
           
            <div>
              <label htmlFor="email" className="block text-xl font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                placeholder="Enter your email..."
              />
            </div>
          
            <div>
              <label htmlFor="password" className="block text-xl font-semibold text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                placeholder="Enter your password..."
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
      