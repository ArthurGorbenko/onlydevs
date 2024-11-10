'use client';

import './globals.css';

import {useState} from 'react';
import {motion} from 'framer-motion';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Github, Twitter, Instagram} from 'lucide-react';
import Image from 'next/image';

export default function Component() {
	const [email, setEmail] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the email to your server
		console.log('Submitted email:', email);
		setIsSubmitted(true);
	};

	return (
		<div className='min-h-screen flex flex-col bg-white text-black'>
			<header className='p-5 flex justify-between items-center border-b border-gray-200'>
				<Image src={'/logo.svg'} alt='OnlyDevs logo' width={200} height={100} />
				<nav>
					<a href='#' className='mx-2 hover:underline'>
						About
					</a>
					<a href='#' className='mx-2 hover:underline'>
						Contact
					</a>
				</nav>
			</header>

			<main className='flex-grow flex flex-col items-center justify-center p-5'>
				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
					className='text-center mb-10'
				>
					<h2 className='text-4xl font-bold mb-4'>
						Cool Hoodies with QR Codes
					</h2>
					<p className='text-xl'>Join the waitlist for exclusive access!</p>
				</motion.div>

				<motion.div
					initial={{opacity: 0, scale: 0.8}}
					animate={{opacity: 1, scale: 1}}
					transition={{delay: 0.2, duration: 0.5}}
					className='mb-10'
				>
					<Image
						src='/placeholder.svg?height=300&width=300'
						alt='Hoodie with QR Code'
						className='rounded-lg shadow-lg'
						width={300}
						height={300}
					/>
				</motion.div>

				<motion.form
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{delay: 0.4, duration: 0.5}}
					onSubmit={handleSubmit}
					className='w-full max-w-md'
				>
					<div className='flex items-center border-b border-black py-2'>
						<Input
							type='email'
							placeholder='Enter your email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className='appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none'
						/>
						<Button
							type='submit'
							className='flex-shrink-0 bg-black hover:bg-gray-800 text-white text-sm py-1 px-2 rounded'
						>
							Join Waitlist
						</Button>
					</div>
				</motion.form>

				{isSubmitted && (
					<motion.p
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						className='mt-4 text-lg'
					>
						Thanks for joining! We'll keep you updated.
					</motion.p>
				)}
			</main>

			<footer className='p-5 flex justify-center items-center border-t border-gray-200'>
				<a
					href='#'
					className='mx-2 text-black hover:text-gray-600'
					aria-label='GitHub'
				>
					<Github className='h-6 w-6' />
				</a>
				<a
					href='#'
					className='mx-2 text-black hover:text-gray-600'
					aria-label='Twitter'
				>
					<Twitter className='h-6 w-6' />
				</a>
				<a
					href='#'
					className='mx-2 text-black hover:text-gray-600'
					aria-label='Instagram'
				>
					<Instagram className='h-6 w-6' />
				</a>
			</footer>
		</div>
	);
}
