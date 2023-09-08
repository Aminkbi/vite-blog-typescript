import { UserIcon } from '@heroicons/react/20/solid';
import { SocialIcon } from 'react-social-icons';

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          About Me
        </h2>
      </div>

      <div className="mt-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="lg:col-start-2">
          <p className="text-xl text-gray-800">
            I'm a self-taught React.js developer with a strong passion for
            learning and staying updated with new technologies. Proficient in
            React and quick to master new languages and frameworks
            independently. I have strong English communication skills.
          </p>

          <p className="mt-4 text-xl text-gray-800">
            I'm aspiring to become a full-stack developer with a self-motivated
            and determined approach. I'm constantly learning and eager to
            contribute as a full-time developer.
          </p>
        </div>

        <div className="mt-10 lg:col-start-1 lg:mt-0">
          <div className="flex items-center justify-center lg:justify-start">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
              <UserIcon className="text-white" />
            </div>

            <div className="ml-4">
              <p className="text-xl font-medium text-gray-900">
                Mohammad Amin Khanbabei
              </p>
              <p className="text-base font-medium text-indigo-600">
                Front-end Developer
              </p>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <SocialIcon url="https://www.linkedin.com/in/mohammad-amin-khanbabaei-805365221/" />
            <SocialIcon url="https://telegram.me/AminBOB" />
            <SocialIcon url="https://github.com/aminkbi" />
          </div>
        </div>
      </div>
    </div>
  );
}
