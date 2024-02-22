import { memo, useState } from "react"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

const GalleryFooter = memo(({ handleThemeColorChange }) => {
  const [newColor, setNewColor] = useState("")
  const handleColorChange = (event) => {
    setNewColor(event.target.value)
  }
  const applyNewColor = () => {
    handleThemeColorChange(newColor)
  }
  return (
    <div className="flex flex-col items-center gap-4 border-t border-gray-300 p-4 md:flex-row md:p-2">
      <div className="flex items-center gap-2 md:gap-4">
        <small className="">Project:</small>
        <a
          href="https://www.flaticon.com/free-icon/gallery_9853877"
          title="gallery icons"
          target="_blank"
          rel="noreferrer"
        ></a>
        <a
          href="https://github.com/webdevsk/Image-Gallery-DND"
          className="text-gray-900 transition-colors hover:text-gray-600"
        >
          <small className="">Customizable Image Gallery</small>
        </a>
      </div>
      <div className="flex items-center gap-2 md:ml-auto md:gap-4">
        <small className="md:ml-auto">Developed by: Abhay Dusane</small>
        <a
          href="https://github.com/CallmeAbhy"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-gray-900 transition-colors hover:text-gray-600"
        >
          <IoLogoGithub className="inline align-text-top" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhaydusane/"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-gray-900 transition-colors hover:text-gray-600"
        >
          <IoLogoLinkedin className="inline align-text-top" />
        </a>
      </div>

      <div className="flex items-center gap-2 md:ml-auto md:gap-4">
        <input
          type="color"
          value={newColor}
          onChange={handleColorChange}
          title="Choose Theme Color"
          className="rounded border border-gray-300 p-1"
        />
        <button
          onClick={applyNewColor}
          className="font-semibold text-danger hover:text-danger-hover hover:underline"
        >
          <small>Apply Color</small>
        </button>
      </div>
    </div>
  )
})

GalleryFooter.displayName = "GalleryFooter"

export default GalleryFooter
