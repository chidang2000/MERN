import React from 'react';

const FooterItem = ({ title, contents }) => {
    return (
        <div className='flex flex-col gap-6'>
            <h3 className='font-bold '>{title}</h3>

            <div className='flex flex-col gap-2'>
                {contents.map((content, i) => (
                    <p key={i} className='text-secondary text-sm'>
                        {content}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default FooterItem;
