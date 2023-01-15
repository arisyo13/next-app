import React, { FC } from 'react';

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="mx-auto container px-16 lg:px-0 flex flex-col lg:items-center lg:flex-row pb-10 lg:pb-20">
      <div className="flex flex-col lg:absolute">
        <h4 className="text-dark-gray">Contact</h4>
        <h4 className="mt-3 text-mid-gray text-sm">sergkiobakou@gmail.com</h4>
        <h4 className="mt-2 text-mid-gray text-sm">+31644857136</h4>
      </div>
      <div className="flex flex-row mt-12 lg:mt-0 justify-between
      md:max-w-xs md:self-center lg:select-none md:gap-28 lg:gap-0 lg:w-72 lg:mx-auto">
        <a href="">
          {/* <Image src="/assets/linkedin.svg" alt="linkedin" width={20} height={20} /> */}
        </a>
        <a href="">
          {/* <Image src="/assets/instagram.svg" alt="instagram" width={20} height={20} /> */}
        </a>
        <a href="">
          {/* <Image src="/assets/behance.svg" alt="behance" width={20} height={20} /> */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
