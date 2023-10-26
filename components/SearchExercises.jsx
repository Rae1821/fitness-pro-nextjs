'use client'

import Image from 'next/image';
import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { fetchExerciseNames } from '@utils';
import { allExerciseNames } from '@constants';



const SearchExercises = ({ exerciseNames, setExerciseNames }) => {


  const [query, setQuery] = useState('');

  const filteredExerciseNames = query === ''
    ? allExerciseNames
    : allExerciseNames.filter((name) =>
        name.toLowerCase()
        .replace(/\s+/g,"")
        .includes(query.toLowerCase().replace(/\s+/g,""))
      );

  return (
    <div className="search">
        <Combobox value={exerciseNames} onChange={setExerciseNames}>
          <div className="relative w-full">
          {/* Button for the combobox. Click on the icon to see the complete dropdown list. */}
            <Combobox.Button className="absolute top-[14px]">
              <Image
                src="/images/icons/magnifying-glass.svg"
                alt="search icon"
                width={24}
                height={24}
              />
            </Combobox.Button>
            {/* Input field for searching */}
            <Combobox.Input
              className="input input-bordered w-full max-x-xs"
              placeholder="Plank"
              displayValue={(exerciseNames) => exerciseNames}
              onChange={(e) => setQuery(e.target.value)}//update the search query when the input changes
            />
            {/* Transition for displaying the options */}
            <Transition
              as={Fragment}//group multiple elements without introducing additional DOM node
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}//reset the search query after the transition is complete
            >
              <Combobox.Options>
                {filteredExerciseNames.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-success text-white' : 'text-gray-900'}`}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {item}
                        </span>
                        {/* Show an active green background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>

                          </span>
                        ) : null}
                      </>
                    )}

                  </Combobox.Option>
                ))}
              </Combobox.Options>

            </Transition>

          </div>
        </Combobox>
    </div>
  )
}

export default SearchExercises
