import { Card } from '@/components/ui/card';

export default function Home() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <Card className='h-64 bg-black'/>
      <Card  className='h-84 bg-black' />
      <Card  className='h-96 bg-black' />
      <Card className='h-64 bg-black'/>
      <Card  className='h-84 bg-black' />
      <Card  className='h-96 bg-black' />
      <Card className='h-64 bg-black'/>
      <Card  className='h-84 bg-black' />
      <Card  className='h-96 bg-black' />
      <Card className='h-64 bg-black'/>
      <Card  className='h-84 bg-black' />
      <Card  className='h-96 bg-black' />
      {/* Add more Card components as needed */}
    </div>
  );
}