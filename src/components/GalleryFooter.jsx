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
    <div className="flex min-h-[2.5rem] flex-wrap items-center gap-1 border-t border-gray-300 px-4 py-2 xl:gap-2 [&_*]:leading-6">
      <div className="flex items-center gap-1 xl:gap-2">
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
      <div className="flex items-center gap-2 max-sm:w-full sm:ms-auto">
        <small className="  sm:ms-auto">Developed by: Abhay Dusane</small>
        <a
          href="https://github.com/CallmeAbhy"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-gray-900 transition-colors hover:text-gray-600 max-sm:ms-auto"
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

      <div className="flex items-center gap-2 max-sm:w-full sm:ms-auto">
        <input
          type="color"
          value={newColor}
          onChange={handleColorChange}
          title="Choose Theme Color"
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
