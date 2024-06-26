import { WobbleCard } from './ui/Card'
const AboutUs = () => {
  return (
    <article id='about' className='w-full flex flex-col flex-wrap justify-between my-14 md:my-24 md:py-24 '>
       <h1 className='w-full py-10 primary-header '>#About Us</h1>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas sit est iusto, placeat nobis praesentium sapiente beatae? Facilis, neque! Quia velit, illum voluptas debitis rerum sed cum neque inventore.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/wild-animal-group-white-background_1308-112351.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[30%]   -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus facilis commodi harum alias tenetur quisquam consequuntur aspernatur architecto dolor! Unde quis qui fugiat libero sed porro similique eius praesentium.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quibusdam doloremque pariatur soluta autem non quidem deserunt dolores aperiam?
          </p>
        </div>
        <img
          src="https://t4.ftcdn.net/jpg/00/81/95/19/360_F_81951964_WW9pQsXZ4OwshXHEySZXHcuy7mEFNF9k.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-40 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
       
    </article>
  )
}

export default AboutUs
