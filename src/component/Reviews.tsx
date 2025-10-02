import Card from './ui/Card';

export default function Reviews() {
  return (
    <div className='px-10 lg:px-20 space-y-4'>
      <h2 className='text-5xl'>Real Experience from Real People</h2>
      <p className='text-md'>Hear from travelers and trainers using Gymscanner around the world</p>
      <div className='flex flex-col xl:flex-row gap-8 items-center'>
        <Card
          name='Samantha K.'
          img='/dp.png'
          message='Found a gym near my Airbnb in Rome within minutes. Loved the flexibility!'
          ratings={4.9}
        />
        <Card
          name='Samantha K.'
          img='/dp.png'
          message='Booked a yoga session while in Lisbon — quick, easy, and great coach!'
          ratings={4.9}
        />
        <Card
          name='Samantha K.'
          img='/dp.png'
          message='Perfect for digital nomads like me. Great selection of gyms around the world.'
          ratings={4.9}
        />
        <Card
          name='Samantha K.'
          img='/dp.png'
          message='Booked a personal trainer in Bali. Incredible session, no long-term contract!'
          ratings={4.9}
        />
      </div>
    </div>
  );
}
