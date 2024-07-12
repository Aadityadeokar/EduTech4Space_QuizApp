import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { Button } from '@mui/material'; // Import Button from MUI


    const carsData = [
        {
            title: 'Quiz 1',
            description: 'Planet Tours',
            link: 'https://www.carwow.co.uk/car-reviews#make-model-menu'
        },
        {
             title: 'Quiz 2 ',
            description: 'Solar Cosmics',
            link: 'https://www.carwow.co.uk/mercedes/amg-gt-coupe'
        },
      {
            title: 'Quiz 3',
            description: 'Lunar Lessons',
            link: 'https://www.carwow.co.uk/audi/rs5'
        },
      {
            title: 'Quiz 4',
            description: 'Atmospheric Analysis',
            link: 'https://www.carwow.co.uk/land-rover/range-rover-evoque'
        },
      
    ];

    return (
        <section className="px-full py-16 bg-black">
            <div className="container mx-auto py-12">
                <section className="py-12">
                    <div className="container mx-auto">
                        <h2 className="text-3xl text-white font-bold text-center mb-8">Our Cars</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </section>
    );
};
export default quiz;
