import React from 'react';

const QuoteTestimonial = ({quotesFromCharacter, selectedCharacter}) => {
  return (
    <>
        <div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
            {
                quotesFromCharacter !== undefined && quotesFromCharacter.length > 0 &&
                quotesFromCharacter.map(quoteFromCharacter => (
                    <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                        <p className="text-gray-600 dark:text-white">
                            <span className="font-bold text-indigo-500 text-lg">“</span>
                                {quoteFromCharacter.quote}
                            <span className="font-bold text-indigo-500 text-lg">”</span>
                        </p>
                        <div className="flex items-center mt-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src={`${selectedCharacter.img}`} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div className="flex flex-col ml-2 justify-between">
                                <span className="font-semibold text-indigo-500 text-sm">
                                    {quoteFromCharacter.author}
                                </span>
                                <span className="dark:text-gray-400 text-xs flex items-center">
                                    {quoteFromCharacter.series}
                                    <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" alt=''/>
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                quotesFromCharacter !== undefined && quotesFromCharacter.length === 0 &&
                <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                    <p className="text-gray-600 dark:text-white">
                        <span className="font-bold text-indigo-500 text-lg">“</span>
                            We dont have any quote from this character in the database.
                            try with another one.
                        <span className="font-bold text-indigo-500 text-lg">”</span>
                    </p>
                    <div className="flex items-center mt-4">
                        <a href="#" className="block relative">
                            <img alt="profil" src={`${selectedCharacter.img}`} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                        </a>
                        <div className="flex flex-col ml-2 justify-between">
                            <span className="font-semibold text-indigo-500 text-sm">
                                The developer
                            </span>
                        </div>
                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default QuoteTestimonial;