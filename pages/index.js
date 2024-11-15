import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function IndexPage() {
    const router = useRouter();

    useEffect(() => {
        router.push('/Home'); // Redirect to the home page
    }, [router]);

    return (
        <></>
    );
}
