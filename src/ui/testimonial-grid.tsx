import { data } from "../data";
import "./testimonial-grid.css"

function TestimonialGrid() {

  return (
    <div className="testimonial-container">
      {data.map((item, index) =>

        <article key={index} className="p-7 m-3 rounded-lg"
          style={{
            backgroundColor: item.style?.bgColor ? "".concat('var(', item.style?.bgColor, ')') : "white",
            color: item.style?.textColor ? "".concat('var(', item.style?.textColor, ')'):"black"
          }}>

          <div className='flex flex-row justify-start items-center gap-x-3
          '
          >
            <picture className="rounded-[50%] overflow-hidden border-[2px] border-white">
              <img src={item.imageUrl} alt={item.name} />
            </picture>
            <div className="flex flex-col">
              <span className="font-[500] text-[18px]">{item.name}</span>
              <span className="text-opacity-10">{item.level}</span>
            </div>
          </div>

          <div className="mt-2">
            <p className={"".concat("font-[600] text-xl mb-3", ` text-[${item.style?.textColor}]`)}>{item.title}</p>
            <blockquote className="text-opacity-10" >{item.quote}</blockquote>
          </div>
        </article>
      )
      }
    </div>
  );
}

export default TestimonialGrid;