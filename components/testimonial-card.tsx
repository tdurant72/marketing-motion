
const TestimonialCard = ({ description, children }: { description: string; children: React.ReactNode }) => {
    return ( 
        <div className="w-full h-full flex flex-col relative">
        <div className="h-full w-full bg-teal-700/80 rounded-tl-md rounded-br-md absolute top-0 left-0">
                </div>
                <div className="h-full w-full relative  pl-4 pt-4">
                    {/* <div className="bg-teal-900 h-[80%] w-full mt-[10vh]"></div> */}
                    <p className="hidden">{description}</p>
                    {children}
                </div>
        </div>
     );
}
 
export default TestimonialCard;