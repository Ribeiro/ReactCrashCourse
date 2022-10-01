import React from 'react';
import uuid from 'react-uuid';
export const NameList = () => {
    const names = ['Bruce', 'Clark', 'Diana']
    return <div>
        {
            names.map((name) => {
                return <h2 key={uuid()}>{name}</h2>
            })
        }
    </div>
}