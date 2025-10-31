import React from 'react'

export default function Homeslider() {
    const Activity = [

        { id: 1, name: 'Cruise', image: 'https://i.postimg.cc/kX8cjTqP/Cruise.jpg' },
        { id: 2, name: 'Customized-package', image: 'https://i.postimg.cc/T2KQbRsq/customized-packages.jpg' },
        { id: 3, name: 'Fixed-Insurance.', image: 'https://i.postimg.cc/zDyphJQL/fixed-departure.jpg' },
        { id: 4, name: 'Flight  ', image: 'https://i.postimg.cc/nVXTmHWp/Flight-png.jpg' },
        { id: 5, name: 'Holidays', image: 'https://i.postimg.cc/RqrW61Dy/holidays.jpg' },
        { id: 6, name: 'Hotel', image: 'https://i.postimg.cc/0rgzMGB3/hotel.jpg' },
    ]
    return (
        <>
            <section>
                <div className='flex  justify-evenly max-w-6xl mx-auto py-6'>

                    {Activity.map((item) => {
                        return (
                            <div key={item.id} className=" flex flex-col items-center shadow-lg  text-center py-6 px-12">
                                <img src={item.image} alt={item.name} className="w-16 h-16 mb-2" />
                                <span className="text-gray-700 text-sm mt-2 font-semibold">{item.name}</span>
                            </div>
                        )
                    })}
                </div>
            </section>

        </>
    )
}
