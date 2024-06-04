"use client";
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/constants';
import { Combobox, Transition } from "@headlessui/react";

// Define the SearchManufacturer component
const SearchManufacturer = ( {manufacturer,
     setManufacturer}: SearchManufacturerProps) => {
        // Initialize the query state with an empty string
        const [query, setQuery] = useState('');

        // Filter the manufacturers based on the query
        const filteredManufacturers = 
        query === "" 
            ? manufacturers 
            : manufacturers.filter((item) => (
                item.toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLowerCase().replace(/\s+/g, "")
            )));


  // Return the search manufacturer element              
  return (
    <div className="search-manufacturer">
 
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image 
                        src="/car-logo.svg"
                        width={20}
                        height={20}
                        className="ml-4"
                        alt="Car Logo" 
                    />
                </Combobox.Button>

                <Combobox.Input
                    className="search-manufacturer__input"
                    placeholder='Volkswagen' 
                    displayValue={(manufacturer:string) => manufacturer}
                    onChange={(e) => setQuery(e.target.value)}               
                />

                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="Opacity-100"
                    leaveTo="Opacity-0"
                    afterLeave={()=> setQuery('')}
                > 
                    <Combobox.Options>
                        {
                            filteredManufacturers.map((item) => (
                                <Combobox.Option
                                    key={item}
                                    className={({active}) => `
                                    relative search-manufactirer__option
                                    ${active ? 'bg-primary-blue text-white' : `text-gray-900`}
                                    `}
                                    value={item}
                                    >
                                        {({selected, active}) => (
                                            <>
                                                <span className={`block trucate ${selected ? 'font-medium' :'font-normal'}`}>
                                                    {item}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute insert-y-0 left-0 flex
                                                            items-center pl-3 ${
                                                                active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                    >

                                                    </span>
                                                ): null}
                                            </>
                                        )}
                                        
                                </Combobox.Option>
                            ))
                        }
                    </Combobox.Options>
                </Transition>

            </div>
        </Combobox>
    </div>
  )
}
// Export the SearchManufacturer component
export default SearchManufacturer