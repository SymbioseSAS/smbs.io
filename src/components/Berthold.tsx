export const Berthold = ({children}: {children: React.ReactNode}) => (
    <>
        <style jsx>{`
            @font-face{ 
                font-family: 'Berthold Akzidenz'; src: url(/fonts/Berthold_Akzidenz_Grotesk_Bold_Extended.otf); 
            }
            .berthold{
                font-family: 'Berthold Akzidenz';
                font-size: 2.7rem;
                text-align: center;
            }
        `}</style>
        <h1 className="berthold">{children}</h1>
    </>
);