import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='bg-theme w-screen flex justify-center'>
      <div className='md:w-full w-1/2'>
        <div className='p-10 font-mont text-center'>
          <div className='flex text-white w-full justify-between px-10 pb-5'>
            <FaInstagram size={40} />
            <FaGithub size={40} />
            <FaLinkedin size={40} />
            <MdMail size={40} />
          </div>
          <div className='h-1 border-2 border-gray-50 border-dotted'></div>
          <p className='text-gray-50 pt-5'>Designed and Developed By</p>
          <p className='text-gray-50'>Team 8</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
