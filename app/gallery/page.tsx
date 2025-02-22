import Image from "next/image"

const images = [
  { src: "https://media.licdn.com/dms/image/v2/D4E22AQEk7rZVBqFRoQ/feedshare-shrink_1280/B4EZQk18a3GwAo-/0/1735784918883?e=1743033600&v=beta&t=0BExgGHrCTtoRHiCVivkzWHxkGVHCasZXTdtZYk2Tp4", alt: "Gallery image 1", title: "Colorful Abstract", height: 300 },
  { src: "https://media.licdn.com/dms/image/v2/D4E22AQEk7rZVBqFRoQ/feedshare-shrink_1280/B4EZQk18a3GwAo-/0/1735784918883?e=1743033600&v=beta&t=0BExgGHrCTtoRHiCVivkzWHxkGVHCasZXTdtZYk2Tp4", alt: "Gallery image 2", title: "Mountain Landscape", height: 450 },
  { src: "https://media.licdn.com/dms/image/v2/D4E22AQEk7rZVBqFRoQ/feedshare-shrink_1280/B4EZQk18a3GwAo-/0/1735784918883?e=1743033600&v=beta&t=0BExgGHrCTtoRHiCVivkzWHxkGVHCasZXTdtZYk2Tp4", alt: "Gallery image 3", title: "City Skyline", height: 400 },
  { src: "https://media.licdn.com/dms/image/v2/D4E22AQEk7rZVBqFRoQ/feedshare-shrink_1280/B4EZQk18a3GwAo-/0/1735784918883?e=1743033600&v=beta&t=0BExgGHrCTtoRHiCVivkzWHxkGVHCasZXTdtZYk2Tp4", alt: "Gallery image 4", title: "Portrait", height: 350 },
  { src: "https://media.licdn.com/dms/image/v2/D4E22AQEk7rZVBqFRoQ/feedshare-shrink_1280/B4EZQk18a3GwAo-/0/1735784918883?e=1743033600&v=beta&t=0BExgGHrCTtoRHiCVivkzWHxkGVHCasZXTdtZYk2Tp4", alt: "Gallery image 5", title: "Food Photography", height: 500 },
  { src: "https://media.licdn.com/dms/image/v2/D4E22AQEk7rZVBqFRoQ/feedshare-shrink_1280/B4EZQk18a3GwAo-/0/1735784918883?e=1743033600&v=beta&t=0BExgGHrCTtoRHiCVivkzWHxkGVHCasZXTdtZYk2Tp4", alt: "Gallery image 6", title: "Nature Close-up", height: 380 },
  { src: "https://media.licdn.com/dms/image/v2/D4E22AQEk7rZVBqFRoQ/feedshare-shrink_1280/B4EZQk18a3GwAo-/0/1735784918883?e=1743033600&v=beta&t=0BExgGHrCTtoRHiCVivkzWHxkGVHCasZXTdtZYk2Tp4", alt: "Gallery image 7", title: "Urban Street", height: 420 },
  { src: "https://media.licdn.com/dms/image/v2/D4E22AQEk7rZVBqFRoQ/feedshare-shrink_1280/B4EZQk18a3GwAo-/0/1735784918883?e=1743033600&v=beta&t=0BExgGHrCTtoRHiCVivkzWHxkGVHCasZXTdtZYk2Tp4", alt: "Gallery image 9", title: "Sunset View", height: 480 },
  { src: "https://media.licdn.com/dms/image/v2/D4E22AQEk7rZVBqFRoQ/feedshare-shrink_1280/B4EZQk18a3GwAo-/0/1735784918883?e=1743033600&v=beta&t=0BExgGHrCTtoRHiCVivkzWHxkGVHCasZXTdtZYk2Tp4", alt: "Gallery image 10", title: "Architectural Detail", height: 340 },
]

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative mb-4 break-inside-avoid">
            <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={image.height}
                layout="responsive"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-opacity duration-300 flex items-end justify-center">
                <h3 className="text-white text-lg font-semibold p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}