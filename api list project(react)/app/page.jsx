import ListContainer from "@/components/list-container"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white drop-shadow-lg animate-fadeIn">
          API Data Explorer
        </h1>
        <div className="backdrop-blur-sm bg-white/10 rounded-xl shadow-2xl p-6 border border-white/30 animate-slideUp">
          <ListContainer
            apiUrl="https://jsonplaceholder.typicode.com/users"
            title="Users Directory"
            renderItem={(item) => (
              <div className="h-full bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-300 to-purple-300 rounded-xl opacity-0 group-hover:opacity-30 transition duration-500 blur"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg">{item.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold text-xl text-white mb-2">{item.name}</h3>
                  <p className="text-white/80 flex items-center mb-1">
                    <span className="inline-block w-3 h-3 mr-2 bg-purple-300 rounded-full"></span>
                    {item.email}
                  </p>
                  <p className="text-sm text-white/70 ml-5">@{item.username}</p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-white/70 text-sm">
                      <span className="font-medium text-white/90">Company:</span> {item.company.name}
                    </p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </main>
  )
}
