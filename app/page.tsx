'use client';
import './globals.css';

import {useState} from 'react';
import {motion} from 'framer-motion';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import Image from 'next/image';

export default function Component() {
	const [email, setEmail] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await fetch('/api/waitlist', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({email})
		});

		setIsSubmitted(true);
	};

	return (
		<div className='min-h-screen flex flex-col bg-white text-black'>
			<main className='flex-grow flex flex-col items-center justify-center p-5'>
				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
					className='text-center mb-10'
				>
					<div className='flex flex-col items-center'>
						<h2 className='text-4xl font-bold mb-4'>
							Cool Hoodies with QR Codes
						</h2>
						<p className='text-xl mb-4'>
							Join the waitlist for exclusive access!
						</p>

						<Image
							src='/demo2.webp'
							alt='People wearing OnlyDevs hoodies'
							width={400}
							height={800}
							objectFit='contain'
							className='rounded-lg'
						/>
					</div>
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
						Thanks for joining! We&apos;ll keep you updated.
					</motion.p>
				)}
			</main>
		</div>
	);
}
