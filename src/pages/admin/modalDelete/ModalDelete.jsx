import React from 'react';

const ModalDelete = ({ closeModal, onDelete }) => {
    return (
        <div className='flex flex-col gap-4 p-4 w-96'>
            <div className='flex items-center'>
                <h3 className='font-bold text-lg text-red-500'>THÔNG BÁO !</h3>
            </div>
            <p className='text-secondary text-sm my-4'>Bạn có muốn xóa sản phẩm này không ?</p>
            <div className='flex items-center justify-end gap-4'>
                <button className='text-black py-2 px-4 border border-secondary rounded-lg' onClick={closeModal}>
                    Hủy
                </button>
                <button className='text-white py-2 px-4  rounded-lg bg-red-500' onClick={onDelete}>
                    Xóa
                </button>
            </div>
        </div>
    );
};

export default ModalDelete;
