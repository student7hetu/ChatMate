import React from 'react';
import assets, { userDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoSearch } from 'react-icons/io5';

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${
        selectedUser ? 'max-md:hidden' : ''
      }`}
    >
      <div className='pb-5'>
        <div className='flex justify-between items-center'>
          <img src={assets.logo} alt='logo' className='max-w-40' />
          <div className='relative py-2 group'>
            <BiDotsVerticalRounded className='max-h-7 cursor-pointer' />
            <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-800 text-gray-100 hidden group-hover:block'>
              <p
                className='cursor-pointer text-sm'
                onClick={() => navigate('/profile')}
              >
                Edit Profile
              </p>
              <hr className='my-2 border-t border-gray-500' />
              <p className='cursor-pointer text-sm'>Logout</p>
            </div>
          </div>
        </div>

        <div className='bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4 mt-5'>
          <IoSearch className='w-4' />
          <input
            type='text'
            placeholder='Search User'
            className='bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        {userDummyData.map((user, index) => (
          <div
            onClick={() => {
              setSelectedUser(user);
            }}
            key={index}
            className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${
              selectedUser?._id === user._id && 'bg-[#282142]/50'
            }`}
          >
            <img
              src={user?.profilePic || assets.avatar_icon}
              alt='profile'
              className='aspect-[1/1] rounded-full w-[35px]'
            />
            <div className='flex flex-col leading-5'>
              <p>{user.fullName}</p>
              <div className='flex items-center gap-1'>
                <span
                  className={`w-2 h-2 rounded-full ${
                    index < 3 ? 'bg-green-400' : 'bg-neutral-400'
                  }`}
                ></span>
                <span className='text-xs'>
                  {index < 3 ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
            {index > 2 && (
              <p className='absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50'>
                {index}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
