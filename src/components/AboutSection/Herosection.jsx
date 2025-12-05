export default function Herosection() {
  return (
    <>
      <div 
        className='relative w-full h-screen sm:h-96 md:h-screen bg-cover bg-center bg-no-repeat' 
        style={{
          backgroundImage: "url('https://i.postimg.cc/MZBZJ4Tx/About-Us-Banner.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className='absolute bottom-0 left-0 rotate-180 w-full'>
          <img 
            src="https://htmldesigntemplates.com/html/travelin/images/shape8.png" 
            alt="shape decoration"
            className='w-full h-auto object-cover'
          />
        </div>
      </div>
    </>
  )
}
