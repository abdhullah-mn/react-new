import React from 'react'

function Card ({userName = "HC", post = "Cricketer"}) {
  return (
    <div>
         <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <img
    src="https://c.ndtvimg.com/2025-10/474cqnro_virat-kohli_625x300_16_October_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"
    alt="Virat Kohli"
    className="w-full h-56 object-cover"
  />
  <div className="p-5">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{userName} {" "} {post}</h2>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti reprehenderit
      officiis dicta repellendus, eligendi esse in voluptates dignissimos culpa.
    </p>
    <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
      Read More
    </button>
  </div>
</div>


    </div>
  )
}

export default Card