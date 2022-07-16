import React, { useState } from 'react';
import Child from '../pages/passIn/child';
import { Button } from 'semantic-ui-react';

export default function Parent() {
    const [data, setData] = useState('');
    // const [add1, setAdd1] = useState(false);
    // const [add2, setAdd2] = useState(false);

    const parentToChild = () => {
        setData("Parent to Child");
    }

    return (
        <>
            <Child parentToChild={data} />
           
                <Button onClick={() => parentToChild()}>
                    Click Here
                </Button>
        </>
    );
}
