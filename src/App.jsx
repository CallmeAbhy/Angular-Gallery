import Gallery from "./components/Gallery"

const App = () => {
  return (
    <div
      className="grid min-h-[100dvh] items-center py-8"
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/54/67/27/546727d1854d11df8c148ecd113a7cfb.gif')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <section>
        <div className="container">
          <Gallery />
        </div>
      </section>
    </div>
  )
}

export default App
