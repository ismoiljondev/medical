import "./Statistics.css"

export const Statistics = () => {
    return (
        <section className="statistics">
            <div className="container max-w-[1050px] w-full px-0 2xl:py-[80px] xl:py-[70px] lg:py-[60px] md:py-[40px]">
                <ul className="statistics-list grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 max-[640px]:grid-cols-1 justify-center 2xl:gap-8 xl:gap-6 lg:gap-5 md:gap-6 sm:gap-6 max-[640px]:gap-6 items-center font-[Montserrat] font-bold">
                    <li className="statistics-list-item text-center  flex flex-col items-center justify-center">
                        <h4 className="statistics-number 2xl:text-[58px] xl:text-[54px] lg:text-[50px] md:text-[46px] sm:text-[42px] max-[640px]:text-[38px] max-[520px]:text-[34px] max-[420px]:text-[30px] tracking-[0.2px] text-[#FF685B] 2xl:leading-[80px] xl:leading-[80px] lg:leading-[80px] md:leading-[70px] sm:leading-[60px] max-[640px]:leading-[50px] max-[500px]:leading-[40px]">15K</h4>
                        <p className="statistics-info 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[15px] max-[640px]:text-[14px] max-[590px]:text-[14px] max-[540px]:text-[14px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[20px] sm:leading-[16px] tracking-[0.1px]">Happy Customers</p>
                    </li>
                    <li className="statistics-list-item text-center  flex flex-col items-center justify-center">
                        <h4 className="statistics-number 2xl:text-[58px] xl:text-[54px] lg:text-[50px] md:text-[46px] sm:text-[42px] max-[640px]:text-[38px] max-[520px]:text-[34px] max-[420px]:text-[30px] tracking-[0.2px] text-[#FF685B] 2xl:leading-[80px] xl:leading-[80px] lg:leading-[80px] md:leading-[70px] sm:leading-[60px] max-[640px]:leading-[50px] max-[500px]:leading-[40px]">150K</h4>
                        <p className="statistics-info 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[15px] max-[640px]:text-[14px] max-[590px]:text-[14px] max-[540px]:text-[14px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[20px] sm:leading-[16px] tracking-[0.1px]">Monthly Visitors</p>
                    </li>
                    <li className="statistics-list-item text-center  flex flex-col items-center justify-center">
                        <h4 className="statistics-number 2xl:text-[58px] xl:text-[54px] lg:text-[50px] md:text-[46px] sm:text-[42px] max-[640px]:text-[38px] max-[520px]:text-[34px] max-[420px]:text-[30px] tracking-[0.2px] text-[#FF685B] 2xl:leading-[80px] xl:leading-[80px] lg:leading-[80px] md:leading-[70px] sm:leading-[60px] max-[640px]:leading-[50px] max-[500px]:leading-[40px]">15</h4>
                        <p className="statistics-info 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[15px] max-[640px]:text-[14px] max-[590px]:text-[14px] max-[540px]:text-[14px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[20px] sm:leading-[16px] tracking-[0.1px]">Countries Worldwide</p>
                    </li>
                    <li className="statistics-list-item text-center  flex flex-col items-center justify-center">
                        <h4 className="statistics-number 2xl:text-[58px] xl:text-[54px] lg:text-[50px] md:text-[46px] sm:text-[42px] max-[640px]:text-[38px] max-[520px]:text-[34px] max-[420px]:text-[30px] tracking-[0.2px] text-[#FF685B] 2xl:leading-[80px] xl:leading-[80px] lg:leading-[80px] md:leading-[70px] sm:leading-[60px] max-[640px]:leading-[50px] max-[500px]:leading-[40px]">100+</h4>
                        <p className="statistics-info 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[15px] max-[640px]:text-[14px] max-[590px]:text-[14px] max-[540px]:text-[14px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[20px] sm:leading-[16px] tracking-[0.1px]">Top Partners</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
