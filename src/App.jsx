import Gallery from "./components/Gallery"

const App = () => {
  return (
    <div className="grid min-h-[100dvh] items-center py-8">
      <section>
        <div className="container">
          <Gallery />
        </div>
      </section>
    </div>
  )
}

export default App
