import React from 'react'

export default function Homeslider() {
    const Activity = [
        { id: 1, name: 'Cruise', image: 'https://i.postimg.cc/kX8cjTqP/Cruise.jpg' },
        { id: 2, name: 'Customized-package', image: 'https://i.postimg.cc/T2KQbRsq/customized-packages.jpg' },
        { id: 3, name: 'Fixed-Insurance.', image: 'https://i.postimg.cc/zDyphJQL/fixed-departure.jpg' },
        { id: 4, name: 'Flight', image: 'https://i.postimg.cc/nVXTmHWp/Flight-png.jpg' },
        { id: 5, name: 'Holidays', image: 'https://i.postimg.cc/RqrW61Dy/holidays.jpg' },
        { id: 6, name: 'Hotel', image: 'https://i.postimg.cc/0rgzMGB3/hotel.jpg' },
    ]

    return (
        <section className="max-w-6xl mx-auto px-4 py-6">
            {/* responsive grid: 2 cols on xs, 3 on sm, 4 on md, 6 on lg */}
            <div
                role="list"
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-start"
            >
                {Activity.map((item) => (
                    <div
                        key={item.id}
                        role="listitem"
                        className="flex flex-col items-center text-center p-4 sm:p-6 bg-white shadow-sm rounded"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 object-cover rounded"
                        />
                        <span className="text-gray-700 text-sm sm:text-base font-semibold break-words">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
