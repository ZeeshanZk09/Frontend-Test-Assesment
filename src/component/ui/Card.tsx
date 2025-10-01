type CardType = {
  img: string;
  name: string;
  ratings: number;
  message: string;
};

export default function Card({ img, name, ratings, message }: CardType) {
  return (
    <div className='max-w-96 p-8 rounded-2xl flex gap-4 flex-col bg-gradient-to-tr from-[#161515b1] to-[#e4cb0a2a]'>
      <div className='flex items-center gap-4'>
        <img src={img} alt={name} />
        <p>{name}</p>
      </div>
      <div className='flex gap-4'>
        <div className='flex gap-2 items-center'>
          <img className='w-4 h-4' src='/star.png' alt='star' />
          <img className='w-4 h-4' src='/star.png' alt='star' />
          <img className='w-4 h-4' src='/star.png' alt='star' />
          <img className='w-4 h-4' src='/star.png' alt='star' />
          <img className='w-4 h-4' src='/star.png' alt='star' />
        </div>
        <span className='text-gray-400'>{ratings}</span>
      </div>
      <p>{message}</p>
    </div>
  );
}
