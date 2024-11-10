import {createClient} from '@/utils/supabase/server';
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
	const {email} = await req.json();

	// Validate email
	if (!email || !/^[\w.-]+@[\w-]+\.[\w.-]+$/.test(email)) {
		return NextResponse.json({error: 'Invalid email address'}, {status: 405});
	}

	// Initialize Supabase client
	const supabase = await createClient();

	try {
		// Insert the email into the waitlist table
		const {error} = await supabase.from('waitlist').insert([{email}]);

		if (error) {
			if (error.code === '23505') {
				// Duplicate email error code
				return NextResponse.json(
					{error: 'Email already on waitlist'},
					{status: 409}
				);
			}
			throw error;
		}

		return NextResponse.json({message: 'Email added to waitlist'});
	} catch (error) {
		console.log('error', error);
		return NextResponse.json(
			{error: 'An error occurred while adding email to waitlist'},
			{status: 500}
		);
	}
}
