import React from 'react'
import { WordPullUp } from '@/components/ui/word-up'
import FeaturedNewsCard from '@/components/featured-news-card'
const Latest = () => {
    return (
        <section className="flex justify-center items-center min-h-screen inset-0 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
            <div className="container mx-auto my-16">
                <div className="block mb-4 mx-auto pb-2">
                    <WordPullUp
                        words="Latest News"
                        className="mt-5 text-slate-800! md:text-5xl  text-center"
                    />
                </div>
                <div id='all' className='flex flex-col md:flex-row gap-4'>
                    <div className='w-full md:basis-1/2'>
                        <FeaturedNewsCard imgSrc='/images/news/charlotte.jpg' imgAlt='North Carolina Ranks in Top Three States to Do Business' title='North Carolina Ranks in Top Three States to Do Business' link='https://www.cnbc.com/2024/06/17/north-carolina-ranks-in-top-three-states-to-do-business.html' isMain={true}>
                            <p className="block text-lg antialiased font-light leading-relaxed text-inherit">
                                CNBC named North Carolina as second best state to do business and in the top three for the fifth year in a row thanks to our well-trained and diverse workforce, booming economy, and strong business environment. In 2019, North Carolina ranked third; in 2021, the state ranked second; and in both 2022 and 2023 North Carolina ranked first
                            </p>
                            <p>Today, CNBC named North Carolina as second best state to do business and in the top three for the fifth year in a row thanks to our well-trained and diverse workforce, booming economy, and strong business environment. In 2019, North Carolina ranked third; in 2021, the state ranked second; and in both 2022 and 2023 North Carolina ranked first.
                            </p>
                            <blockquote className='font-semibold mt-6'>
                                “Investing in our people makes our continued success possible,” said Governor Roy Cooper. “Thanks to our highly-skilled workforce built by our strong public schools and thriving economy with major investments from companies across all sectors, North Carolina continues to be a top destination for business.”</blockquote>
                        </FeaturedNewsCard>
                    </div>
                    {/* Cards */}
                    <div id="stories" className='w-full md:basis-1/2 flex flex-wrap gap-4'>
                        <FeaturedNewsCard imgSrc='/images/news/batteries.jpg' imgAlt='Natron Energy Announces $1.4 Billion Investment in North Carolina' title='Natron Energy Announces $1.4 Billion Investment in North Carolina' link='https://www.prnewswire.com/news-releases/natron-energy-announces-1-4-billion-investment-in-north-carolina-301842467.html'>
                            <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                                Natron Energy, Inc., the only commercial manufacturer of sodium-ion batteries in the U.S., has announced it will invest $1.4 billion to establish a sodium-ion battery giga-factory at the Kingsboro CSX Select Megasite in Edgecombe County.
                            </p>
                        </FeaturedNewsCard>
                        <FeaturedNewsCard imgSrc='/images/news/aircraft.jpg' imgAlt='In major investment, officials break ground for military aircraft maintenance facility at N.C. Global TransPark' title='In major investment, officials break ground for military aircraft maintenance facility at N.C. Global TransPark' link='https://www.witn.com/2024/06/11/major-investment-officials-break-ground-military-aircraft-maintenance-facility-nc-global-transpark/'>
                            <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                                State, federal and local officials broke ground Tuesday on a North Carolina Global TransPark complex that the U.S. Navy will use to maintain and repair Navy and Marine Corps aircraft.
                            </p>
                        </FeaturedNewsCard>
                        <FeaturedNewsCard imgSrc='/images/news/students.jpg' imgAlt='Global TransPark hosts RIME 2024 connecting students with industry' title='Global TransPark hosts RIME 2024 connecting students with industry' link='https://www.prnewswire.com/news-releases/global-transpark-hosts-rime-2024-connecting-students-with-industry-301838907.html'>
                            <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                                The Regional Industry and Manufacturing Expo (RIME) 2024 kicked off Wednesday at the North Carolina Global TransPark, drawing high school students from across Greene, Jones, Lenoir, and Wayne Counties.
                            </p>
                        </FeaturedNewsCard>
                        <FeaturedNewsCard imgSrc='/images/news/airport.jpg' imgAlt='North Carolina and NC Global TransPark invest $30 million for pilot training center' title='North Carolina and NC Global TransPark invest $30 million for pilot training center' link='https://www.prnewswire.com/news-releases/north-carolina-and-nc-global-transpark-invest-30-million-for-pilot-training-center-301837906.html'>
                            <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                                A leading provider of premium private jet charter experiences, today announced that the Global Transpark secured a $30 million investment from the State of North Carolina for a cutting-edge pilot training center and headquarters.
                            </p>
                        </FeaturedNewsCard>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Latest