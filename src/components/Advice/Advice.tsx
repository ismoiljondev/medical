import "./Advice.css"
import Title from "../Title/Title"
import CommitCard from "../Commit-cards/CommitCard"
import AuthorOneImg from "@/img/author1.png"
import AuthorTwoImg from "@/img/author2.png"

export const Advice = () => {
    return (
        <section className="advice">
            <div className="container max-w-[1050px]">
                <Title
                    types="showcase"
                    header="Practice Advice"
                    headline="Leading Medicine"
                    subHeadline="Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics "
                    className="mb-20 max-[1366px]:mb-16 max-[800px]:mb-14 max-[600px]:mb-4 max-[600px]:flex max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center max-[600px]:text-center"
                />

                <ul className="advice-cards grid grid-cols-3 justify-center items-center max-[600px]:grid-cols-1 ">
                    <li className="advice-card max-[600px]:flex max-[600px]:items-center max-[600px]:justify-center">
                        <CommitCard rate={4}
                            commit={"Slate helps you see how many more days you need to work to reach your financial goal for the month and year."}
                            authorImg={AuthorOneImg} authorName={"Tyler Durden"} authorRole={"Designer"}></CommitCard>
                    </li>
                    <li className="advice-card max-[600px]:flex max-[600px]:items-center max-[600px]:justify-center">
                        <CommitCard rate={3}
                            commit={"Slate helps you see how many more days you need to work to reach your financial goal for the month and year."}
                            authorImg={AuthorTwoImg} authorName={"John Wick"} authorRole={"Administrator"}></CommitCard>
                    </li>
                    <li className="advice-card max-[600px]:flex max-[600px]:items-center max-[600px]:justify-center">
                        <CommitCard rate={1}
                            commit={"Slate helps you see how many more days you need to work to reach your financial goal for the month and year."}
                        ></CommitCard>
                    </li>
                </ul>
            </div>
        </section>
    )
}
