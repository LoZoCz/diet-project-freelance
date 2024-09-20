import { Button } from '@/components/ui/button'
import { Leaf } from 'lucide-react'
import { InternalLink } from '@/components/custom/typography'

export default function NotFound() {
    return (
        <section className="relative flex h-section flex-col items-center justify-center overflow-hidden p-4">
            <div className="z-10 rounded-lg bg-white bg-opacity-80 p-8 text-center shadow-lg">
                <Leaf className="mx-auto mb-4 h-16 w-16 animate-bounce text-primary/75" />
                <h1 className="mb-4 text-6xl font-bold text-primary">
                    Ups! 404
                </h1>
                <p className="mb-8 text-xl text-primary">
                    Wygląda na to, że ta strona jest na diecie...
                </p>
                <Button asChild>
                    <InternalLink href="/" className="no-underline">
                        Wróć na stronę główną
                    </InternalLink>
                </Button>
            </div>
        </section>
    )
}
