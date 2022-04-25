import React, { useState, useEffect } from 'react';
import breakingBadApiDeathsFetch from '../helpers/breakingBadApiDeathsFetch';

const DeathsScreen = () => {

    const [deaths, setDeaths] = useState();

    useEffect(() =>  {
        breakingBadApiDeathsFetch().then(response => {
            setDeaths(response);
        });
    }, []);

  return (
    <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
            <table className="w-full">
                <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">Responsible</th>
                    <th className="px-4 py-3">Who died</th>
                    <th className="px-4 py-3">Why</th>
                    <th className="px-4 py-3">Last words</th>
                </tr>
                </thead>
                <tbody className="bg-white">
                    {
                        deaths !== undefined &&
                        deaths.map(death => (
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 text-ms font-semibold border">{death.responsible}</td>
                                <td className="px-4 py-3 text-ms font-semibold border">{death.death}</td>
                                <td className="px-4 py-3 text-ms font-semibold border">{death.cause}</td>
                                <td className="px-4 py-3 text-sm border">{death.last_words}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    </section>
  )
}

export default DeathsScreen;