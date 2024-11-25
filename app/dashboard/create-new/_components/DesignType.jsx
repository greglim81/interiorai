import React,{useState} from 'react'

function DesignType({selectedDesignType}) {
    const Designs = [
        {
          name: 'Modern',
          image: '/modern.png',
        },
        {
          name: 'Industrial',
          image: '/industrial.png',
        },
        {
          name: 'Bohemian',
          image: '/bohemian.png',
        },
        {
          name: 'Traditional',
          image: '/traditional.png',
        },
        {
          name: 'Rustic',
          image: '/rustic.png',
        }, {
          name: 'Minimalist',
          image: '/minimalist.png',
        }
      ]  
      
    const [selectedOption, setSelectedOption] = useState();

  return (
    <div>
        <label>Select Interior Design Type</label>
        <div className="grid grid-cols-4 gap-4">
            {Designs.map((design, index) => (
                <div key={index} 
                    onClick={()=>{
                      setSelectedOption(design.name);
                      selectedDesignType(design.name)
                    }} 
                    className="cursor-pointer hover:opacity-80 transition-opacity">
                    <div 
                        className={`aspect-square w-full h-32 relative overflow-hidden rounded-lg
                            ${selectedOption === design.name ? 'ring-4 ring-blue-500' : ''}`}
                    >
                        <img src={design.image} className="absolute inset-0 w-full h-full object-cover rounded-lg" />                    
                    </div>
                    <h2 className="text-center mt-2 font-medium">
                            {design.name}
                    </h2>
                </div>
            ))}
        </div>
    </div>      
  )
}
export default DesignType
    