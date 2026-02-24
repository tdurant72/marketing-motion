"use client"
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Image from 'next/image';
// import Button from './Button'
import SiteModal from '@/components/site-modal';
import { WordPullUp } from './ui/word-up';
import {properties} from '../lib/properties';
const SiteSelection = () => {
    const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
      const handlePropertyClick = (id:number)=>{
        setSelectedProperty(id)
      }
      const handleCloseModal =()=>{
        setSelectedProperty(null)
      }
      const handleNextProperty =()=>{
        const currentIndex = properties.findIndex((property)=>property.id === selectedProperty);
        if(currentIndex === -1){
            return null;
        }
        const nextIndex = (currentIndex+1) % properties.length;
        setSelectedProperty(properties[nextIndex].id)
      }
      const handlePrevProperty =()=>{
        const currentIndex = properties.findIndex((Property)=>Property.id === selectedProperty);
        if(currentIndex === -1){
            return null;
        }
        const prevIndex = (currentIndex-1 + properties.length) % properties.length;
        setSelectedProperty(properties[prevIndex].id)
      }
  return (
    <section id='site-selection' className="flex items-center overflow-hidden  p-0 pt-[8vh] bg-radial-[at_25%_25%] from-slate-50 to-slate-200 to-75% h-screen">
        <div className="site-items flex items-center mx-auto justify-around gap-4 px-6 md:w-5xl 2xl:w-7xl">
            
            <div className='site-copy px-10 py-10'>
                <WordPullUp words='Site Selection' className='text-4xl md:text-5xl text-slate-800 py-8 hero-text '/>
                <p className='text-xl md:text-2xl text-slate-700 pb-10'>Our sites and buildings are meticulously engineered for immediate business acceleration. With comprehensive utility infrastructure and advanced telecommunications connectivity, we eliminate startup barriers. Environmental approvals are pre-secured, enabling you to break ground and launch operations without delay. </p>
                <div className='grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-3 my-6'>
            {properties.map((property, index)=>(
                <div onClick={()=>handlePropertyClick(property.id)} key={index} className='bg-gray-800/30 backdrop-blur-sm rounded-[20px] p-6 border border-gray-700/50 hover:border-primary-500/50 transition-colors hover:shadow-sm duration-300 text-left relative overflow-hidden h-56 cursor-pointer w-full max-w-[400px]'>
                    <Image src={property.specifics.photos[0] || "/placeholder.svg"} width={438} height={87} unoptimized className='overflow-hidden absolute top-0 left-0' alt={property.name} />
                    <div className='flex flex-col h-full absolute top-[50%] z-20'>
                        <h3 className='text-lg font-semibold text-white drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-gray-800 mb-2'>{property.name}</h3>
                    </div>
                </div>
            ))}
        </div>
            </div>
        </div>
        {
            selectedProperty && (
                <SiteModal 
                    siteData={properties.find((property)=>property.id === selectedProperty)}
                    onClose={handleCloseModal}
                />
            )
        }
    </section>
  )
}

export default SiteSelection