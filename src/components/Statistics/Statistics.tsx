import "./Statistics.css"

export const Statistics = () => {
    return (
        <section className="statistics">
            <div className="container max-w-[1050px] w-full px-0 py-[80px]">
                <ul className="statistics-list grid grid-cols-4 gap-8 justify-center items-center font-[Montserrat] font-bold">
                    <li className="statistics-list-item flex flex-col items-center justify-center">
                        <h4 className="statistics-number text-[58px] tracking-[0.2px] text-[#FF685B] leading-[80px]">15K</h4>
                        <p className="statistics-info text-[16px] leading-[24px] tracking-[0.1px]">Happy Customers</p>
                    </li>
                    <li className="statistics-list-item flex flex-col items-center justify-center">
                        <h4 className="statistics-number text-[58px] tracking-[0.2px] text-[#FF685B] leading-[80px]">150K</h4>
                        <p className="statistics-info text-[16px] leading-[24px] tracking-[0.1px]">Monthly Visitors</p>
                    </li>
                    <li className="statistics-list-item flex flex-col items-center justify-center">
                        <h4 className="statistics-number text-[58px] tracking-[0.2px] text-[#FF685B] leading-[80px]">15</h4>
                        <p className="statistics-info text-[16px] leading-[24px] tracking-[0.1px]">Countries Worldwide</p>
                    </li>
                    <li className="statistics-list-item flex flex-col items-center justify-center">
                        <h4 className="statistics-number text-[58px] tracking-[0.2px] text-[#FF685B] leading-[80px]">100+</h4>
                        <p className="statistics-info text-[16px] leading-[24px] tracking-[0.1px]">Top Partners</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
