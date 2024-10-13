import { FC } from 'react'
import Logo from './Logo'
import { ExternalLink, InternalLink, P } from './typography'

const Footer: FC = () => {
    return (
        <footer className="mt-12 w-full bg-secondary">
            <div className="container flex flex-wrap items-center justify-center gap-8 px-4 py-8 text-secondary-foreground tablet:items-start tablet:justify-between">
                <Logo withName logoSize={64} />
                <div className="flex flex-wrap gap-12">
                    <div className="space-y-4">
                        <P className="font-bold">Kontakt</P>
                        <P className="space-x-1">
                            <span>Mail:</span>
                            <ExternalLink href="mailto:dietabezcudow@o2.pl">
                                dietabezcudow@o2.pl
                            </ExternalLink>
                        </P>
                    </div>
                    <div className="space-y-4">
                        <P className="font-bold">Regulamin</P>
                        <P>
                            <InternalLink href="/terms">
                                Regulamin i RODO
                            </InternalLink>
                        </P>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
