import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {QrCode, Shirt} from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
	return (
		<div className='min-h-screen bg-background text-foreground'>
			<main className='container mx-auto px-4 py-8 space-y-12'>
				<section className='text-center space-y-4'>
					<h1 className='text-4xl font-bold'>Wear Your Story</h1>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						OnlyDevs: Where authenticity meets fashion, and every scan tells a
						unique tale.
					</p>
				</section>

				<section className='grid md:grid-cols-2 gap-8 items-center'>
					<div>
						<h2 className='text-3xl font-semibold mb-4'>Our Brand Story</h2>
						<p className='text-muted-foreground mb-4'>
							Founded in the spirit of transparency and connection, OnlyDevs
							empowers individuals to proudly share their real-life
							stories—wins, losses, lessons, and laughs. In a world increasingly
							curated and filtered, OnlyDevs encourages authenticity and
							vulnerability, redefining personal branding by making honesty the
							new "cool."
						</p>
						<p className='text-muted-foreground'>
							The idea is simple but bold: wear your story. Through QR-coded
							apparel and accessories, OnlyDevs gives people a unique way to
							connect. Wearers can upload their CVs, funniest fails, memes,
							personal achievements, or candid reflections to a digital profile,
							accessible instantly to anyone curious enough to scan.
						</p>
					</div>
					<div className='relative h-[600px] md:h-full'>
						<Image
							src='/demo.webp'
							alt='People wearing OnlyDevs hoodies'
              layout='fill'
							objectFit='contain'
							className='rounded-lg'
						/>
					</div>
				</section>

				<section className='space-y-8'>
					<h2 className='text-3xl font-semibold text-center'>Our Products</h2>
					<div className='grid md:grid-cols-2 gap-8'>
						<Card>
							<CardContent className='p-6 space-y-4'>
								<div className='flex items-center space-x-4'>
									<Shirt className='h-8 w-8' />
									<h3 className='text-2xl font-semibold'>
										Customizable Hoodies
									</h3>
								</div>
								<p className='text-muted-foreground'>
									Express yourself with our comfortable, high-quality hoodies.
									Each one comes with a unique QR code that links to your
									personal digital profile.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className='p-6 space-y-4'>
								<div className='flex items-center space-x-4'>
									<QrCode className='h-8 w-8' />
									<h3 className='text-2xl font-semibold'>Personal QR Codes</h3>
								</div>
								<p className='text-muted-foreground'>
									Your unique QR code is your gateway to sharing your story.
									Link it to your CV, achievements, or anything that represents
									the real you.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				<section className='text-center space-y-4'>
					<h2 className='text-3xl font-semibold'>Our Mission</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						By fostering an open community where people can be genuinely
						themselves, OnlyDevs not only breaks down social barriers but also
						creates a supportive space for people to be unapologetically real.
						Our mission is to turn public spaces into real, relatable
						connections, one scan at a time.
					</p>
				</section>

				<section className='bg-muted rounded-lg p-8 text-center'>
					<h2 className='text-3xl font-semibold mb-4'>
						Join the OnlyDevs Community
					</h2>
					<p className='text-xl text-muted-foreground mb-6'>
						Ready to wear your story and connect with others authentically?
					</p>
					<Button size='lg'>Shop Now</Button>
				</section>
			</main>
		</div>
	);
}
