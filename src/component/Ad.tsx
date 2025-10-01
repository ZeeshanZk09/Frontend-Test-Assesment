import './../index.css';

export default function Ad() {
  return (
    <div className='p-10 lg:p-20'>
      <div
        className='bg-[#111111] rounded-2xl p-12 flex flex-col items-center justify-center gap-4 text-center 
                bg-gradient-radial from-yellow-900/20 via-transparent to-transparent'
      >
        <h2 className='h2font'>Ready to dive in?</h2>
        <p className='text-sm'>Sign up, select your desired challenge account and Get Funded.</p>
        <button className='bg-yellow-400 text-black rounded-2xl p-4' type='button'>
          Get Funded
        </button>
      </div>
    </div>
  );
}
