// Code in this file was inspired by Josh W Comeau's blog, learn more at https://www.joshwcomeau.com/snippets/react-hooks/use-has-mounted/
import React, { useState, useEffect } from 'react';

export const ClientOnly = ({children, ...delegated}) => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    },[]);

    if (!hasMounted) {
        return null;
    }
    return(
        <div {...delegated}>
            {children}
        </div>
    );
}
