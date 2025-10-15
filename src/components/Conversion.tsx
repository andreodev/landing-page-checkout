import { CartIcon, ConversionIcon } from "./Icons";



export default function Conversion() {
    return (
        <section className="bg-[#FAFAFA] flex flex-col items-center justify-start my-15 sm:my-24 px-4 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl items-stretch rounded-2xl bg-white">
                
                <div className="flex flex-col justify-center items-center space-y-6 ">

                    <div className='text-[#3B4781] text-5xl text-center font-medium mt-8 '>
                        <span className='block'>Aumento médio </span>
                        <span className='block'>de 40% na conversão</span>
                    </div>

                    <div 
                        className='text-[26px] font-medium text-center py-2.5 px-4 rounded-lg'
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%2301AEA4' stroke-width='2' stroke-dasharray='12%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                        }}
                    >
                        <p className="flex items-center justify-center gap-1"><CartIcon /> dos<span className='text-[#01AEA4] '>carrinhos abandonados</span></p>
                    </div>

                </div>

                <div className="flex items-center justify-end">
                <ConversionIcon />
                    </div>
            </div>
        </section>
    );
}
