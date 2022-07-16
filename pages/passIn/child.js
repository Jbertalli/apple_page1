import React, { useState, useEffect } from 'react';

export default function Child({parentToChild}) {

   console.log({parentToChild}); 

    return (
        <>
            <div>
                {parentToChild}
            </div>
        </>
    );
}
