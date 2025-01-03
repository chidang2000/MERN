import React from 'react';
import FooterItem from './FooterItem';

const contents1 = ['Các câu hỏi thường gặp', 'Gửi yêu cầu hỗ trợ'];
const contents2 = ['Các câu hỏi thường gặp', 'Gửi yêu cầu hỗ trợ'];
const contents3 = ['Các câu hỏi thường gặp', 'Gửi yêu cầu hỗ trợ'];
const contents4 = ['Các câu hỏi thường gặp', 'Gửi yêu cầu hỗ trợ'];
const Footer = () => {
    return (
        <div className='container mx-auto flex gap-8 justify-between mt-8 bg-white p-8'>
            <FooterItem title='Nguyen Chi Dang' contents={contents1} />
            <FooterItem title='Nguyen Chi Dang' contents={contents2} />
            <FooterItem title='Nguyen Chi Dang' contents={contents3} />
            <FooterItem title='Nguyen Chi Dang' contents={contents4} />
        </div>
    );
};

export default Footer;
