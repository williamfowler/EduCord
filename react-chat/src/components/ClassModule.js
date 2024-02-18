import React, { useEffect, useState } from 'react';

const ClassModule = ({ }) => {
        const [isVisible, setVisibility] = useState(true)
        //do the fetch users thing
        const makeVisible = () =>{
                setVisibility(true);
        }

        const makeInvisible = () => {
                setVisibility(false);
        }
        return (
                <aside className="class-module">  
                        <h2>Class Module</h2>
                </aside>
        );
};

export default ClassModule;