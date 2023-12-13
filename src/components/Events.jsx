import {vortex, equinox, robowars, md, icr} from "../assets/events"

const slides = [
  {
    name: "Robowars",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aperiam dignissimos culpa, temporibus reprehenderit magni, esse delectus natus commodi officiis alias distinctio quis velit voluptas, incidunt accusantium iusto! Ab, hic?",
    image: robowars,
  },
  {
    name: "Vortex360",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aperiam dignissimos culpa, temporibus reprehenderit magni, esse delectus natus commodi officiis alias distinctio quis velit voluptas, incidunt accusantium iusto! Ab, hic?",
    image: vortex,
  },
  {
    name: "Equinox",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aperiam dignissimos culpa, temporibus reprehenderit magni, esse delectus natus commodi officiis alias distinctio quis velit voluptas, incidunt accusantium iusto! Ab, hic?",
    image: equinox,
  },
  {
    name: "Machine Design with Fusion360",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aperiam dignissimos culpa, temporibus reprehenderit magni, esse delectus natus commodi officiis alias distinctio quis velit voluptas, incidunt accusantium iusto! Ab, hic?",
    image: md,
  },
  {
    name: "Introduction to combat robotics",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aperiam dignissimos culpa, temporibus reprehenderit magni, esse delectus natus commodi officiis alias distinctio quis velit voluptas, incidunt accusantium iusto! Ab, hic?",
    image: icr,
  },
];

const Events = () => {
  return (
    <div className='p-10 flex flex-col justify-around h-full items-center gap-4 bg-black'>

      {/* Title */}
      <h1 className="text-white text-5xl font-bold border-b-[#FFD382] border-b-4 p-2"> Events</h1>
      {/* Grid container of 2 columns */}
      <div className="px-10 w-full grid lg:grid-cols-2">
        {slides.map((slide,index) => {
            return (
              <div className={`flex flex-col lg:flex-row py-4 h-full border-b-[#FFD382] border-b-4 sm:col-span-1 ${index == 0 ? 'lg:col-span-2' : 'col-span-1' }`}>
                <img src={slide.image} className="lg:w-1/2 my-2"/>
                <div className="lg:w-1/2  flex flex-col text-white p-4 m-4">
                  <h3 className="text-center font-bold text-xl mb-4"> {slide.name}</h3>
                  <p className="text-md"> {slide.description}</p>
                </div>  
              </div>
            )
        })}
      </div>
    </div>
  )
}


export default Events
