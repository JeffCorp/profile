import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import {
  NavHashLink,
  HashLink,
} from 'react-router-hash-link/dist/react-router-hash-link.cjs.development';
import IconButton from './IconButton';
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdArrowDropdown } from 'react-icons/io';

function LeftSection() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onNavPress = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full lg:w-[80%] h-[100vh] flex flex-col items-center lg:items-start px-8 lg:px-0 lg:pl-10 xl:pl-20 py-6 lg:py-20 lg:justify-between">
      <div className="mobile lg:hidden w-full">
        <IconButton
          icon={
            isOpen ? (
              <IoMdClose size={24} color="#fff" />
            ) : (
              <GiHamburgerMenu size={24} color="#fff" />
            )
          }
          onClick={toggleMenu}
          className="ml-auto"
        />
        <div
          className={`w-full h-[100vh] bg-[#151515] fixed top-0 left-0 z-10 transition-all duration-700 ease-in-out transform ${
            isOpen
              ? 'translate-y-20 opacity-100'
              : '-translate-y-full opacity-0'
          }`}
        >
          <ul className="flex flex-col  text-lg text-black w-full">
            <li className="text-white hover:bg-[#777778] active:bg-black flex">
              <NavHashLink
                smooth
                className="p-8 w-full active:text-white text-center"
                to="/#"
                onClick={onNavPress}
              >
                Home
              </NavHashLink>
            </li>
            <li className="text-white hover:bg-[#777778] active:bg-black flex">
              <NavHashLink
                smooth
                className="p-8 w-full active:text-white text-center"
                to="/#work"
                onClick={onNavPress}
              >
                Work Experience
              </NavHashLink>
            </li>
            <li className="text-white hover:bg-[#777778] active:bg-black flex">
              <NavHashLink
                smooth
                className="p-8 w-full active:text-white text-center"
                to="/#projects"
                onClick={onNavPress}
              >
                Projects
              </NavHashLink>
            </li>
            <li className="flex flex-col items-center gap-6 mt-20">
              <p className="text-[#777778] text-2xl">Connect With Me</p>
              <div className="footer flex flex-wrap items-center gap-4 w-full justify-center">
                <Button
                  logo={<FaGithub color="#777778" />}
                  name="GitHub"
                  link="https://github.com/jeffcorp"
                />
                <Button
                  logo={<FaTwitter color="777778" />}
                  name="Twitter"
                  link="https://x.com/"
                />
                <Button
                  logo={<MdAlternateEmail color="777778" />}
                  name="Email"
                  link="mailto:jeffukus@gmail.com"
                />
                <Button
                  logo={<FaLinkedin color="777778" />}
                  name="LinkedIn"
                  link="https://www.linkedin.com/in/jeffcorp/"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="description mb-6 flex flex-col gap-6 items-center lg:items-left mt-20 lg:mt-0">
        <div className="text-white flex flex-col items-left w-full">
          <p className="text-lg text-[#777778]">Hi, i am</p>
          <h1 className="font-bold text-4xl">Jeffery Ukutegbe</h1>
        </div>
        <p className="text-[#777778] font-light text-sm leading-loose text-justify">
          Dedicated <span className="text-white">Senior Software Engineer</span>{' '}
          with experience in creating{' '}
          <span className="text-white">
            responsive and user-friendly web, mobile applications, backend
            services, and consuming LLMs{' '}
          </span>
          across various industries. Proficient in{' '}
          <span className="text-white">
            React, Typescript, JavaScript, NextJs, NodeJs, and NestJS.
          </span>{' '}
          Strong background in{' '}
          <span className="text-white">
            building scalable applications yet beautiful applications
          </span>
          , balancing functional and aesthetic design.
          <span className="text-white"> Effective collaborator</span> with
          cross-functional teams to deliver{' '}
          <span className="text-white">secure and scalable platforms.</span>
        </p>
        <HashLink
          smooth
          className="bg-white lg:hidden flex items-center justify-center py-2 px-4 text-sm mt-4 gap-1"
          to="#work"
        >
          Explore
          <span>
            <IoMdArrowDropdown size={20} />
          </span>
        </HashLink>
      </div>

      <nav className="w-full hidden lg:flex">
        <ul className="text-white w-full flex flex-col">
          <li className="py-4 flex items-center">
            <span>00</span>
            <NavHashLink
              smooth
              className="w-full h-full flex items-center"
              to="#work"
            >
              <span className="mx-4 w-[4rem] h-[1px] "></span>
              WORK EXPERIENCE
            </NavHashLink>
          </li>
          <li className="py-4 flex items-center">
            <span>01</span>
            <NavHashLink
              smooth
              to="#projects"
              className="w-full h-full flex items-center"
            >
              <span className="mx-4 w-[4rem] h-[1px] "></span>
              PROJECTS
            </NavHashLink>
          </li>
          <li className="w-full py-4 flex items-center">
            <span>02</span>
            <Link
              className="w-full h-full flex items-center"
              target="_blank"
              to="https://www.linkedin.com/in/jeffcorp"
            >
              <span className="mx-4 w-[4rem] h-[1px] "></span>
              LINKEDIN
            </Link>
          </li>
        </ul>
      </nav>

      <div className="footer flex flex-col items-center gap-10 mt-auto lg:mt-0">
        <div className="flex items-center gap-4 w-full flex-wrap justify-center">
          <div className="hidden lg:flex profile-pic w-10 h-10 bg-white rounded-full"></div>
          <Button
            logo={<FaGithub color="#777778" />}
            name="GitHub"
            link="https://github.com/jeffcorp"
          />
          <Button
            logo={<FaTwitter color="777778" />}
            name="Twitter"
            link="https://x.com/"
          />
          <Button
            logo={<MdAlternateEmail color="777778" />}
            name="Email"
            link="mailto:jeffukus@gmail.com"
          />
          <Button
            logo={<FaLinkedin color="777778" />}
            name="LinkedIn"
            link="https://www.linkedin.com/in/jeffcrop/"
          />
        </div>

        <Link
          className="text-xs text-[#777778]"
          target="_blank"
          to="https://www.sarahdayan.dev/"
        >
          Inspired By <span className="text-white">Sarah Dayan</span>
        </Link>
      </div>
    </div>
  );
}

export default LeftSection;
