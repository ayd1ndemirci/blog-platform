'use client';

import { useEffect, useState } from 'react';

export default function UpdateView({ blogId }) {
    const [hasUpdated, setHasUpdated] = useState(false);

    useEffect(() => {
        const updateViews = async () => {
            if (!hasUpdated) {
                try {
                    const response = await fetch(`/api/update-views/${blogId}`, {
                        method: 'POST',
                    });
                    const data = await response.json();
                    console.log(data.message);
                    setHasUpdated(true); 
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        };

        updateViews();
    }, [blogId, hasUpdated]);

    return null;
}
