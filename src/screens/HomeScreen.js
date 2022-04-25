import React from 'react';
import ChemicalElement from '../components/ChemicalElement';

export const HomeScreen = () => {
  return (
    
    <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
        <div className="flex relative z-20 items-center">
            <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                <div className="flex flex-col">
                    <div className="text-3xl my-6 text-center dark:text-white">
                        <ChemicalElement word={"Hi I'm Gabriel"} letters={2}/>
                    </div>
                    <div className="text-2xl my-6 text-center dark:text-white">
                        <ChemicalElement word={"And this is my first web made with react. Hope you enjoy it!"} letters={3}/>
                    </div>
                    <div className="text-2xl my-6 text-center dark:text-white">
                        <ChemicalElement word={"Contacte me"} letters={1}/>
                    </div>
                    <div className="flex justify-center flex-col md:flex-row p-5">
                        <a href="#" className="block relative p-2">
                            <img alt="profil" src={`../assets/github.png`} className="mx-auto object-cover rounded-full h-16 w-16 "/>
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-canosa/" className="block relative p-2">
                            <img alt="profil" src={`../assets/linkedin.png`} className="mx-auto object-cover rounded-full h-16 w-16 "/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>

  )
}
