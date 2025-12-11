import { TypeAnimation } from 'react-type-animation';

// Ikon-ikon (tidak ada perubahan di sini)
const BriefcaseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075c0 1.313-.964 2.446-2.25 2.655v-2.91a2.25 2.25 0 0 0-2.25-2.25H8.25V14.15c0-1.657 1.343-3 3-3h3V9.75a2.25 2.25 0 0 0-2.25-2.25H6.375c-1.313 0-2.446.964-2.655 2.25v2.91a2.25 2.25 0 0 0 2.25 2.25h1.875v3.75a2.25 2.25 0 0 0 2.25 2.25h3.75c1.241 0 2.25-1.009 2.25-2.25v-3.75h1.875a2.25 2.25 0 0 0 2.25-2.25v-2.91c-.209 1.291-1.342 2.25-2.655 2.25Z" /></svg> );
const UserIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg> );
const CodeBracketIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg> );

const SplashScreen = () => {
  return (
    <div className="bg-slate-900 text-white flex flex-col justify-center items-center h-screen w-screen fixed inset-0 z-[100]">
      {/* Bagian Ikon (tidak ada perubahan) */}
      <div className="flex space-x-8 mb-8">
        <div className="opacity-0 animate-fade-in-1"><CodeBracketIcon /></div>
        <div className="opacity-0 animate-fade-in-2"><UserIcon /></div>
        <div className="opacity-0 animate-fade-in-3"><BriefcaseIcon /></div>
      </div>

      {/* --- PERUBAHAN DI className --- */}
      <TypeAnimation
        sequence={[
          2200,
          'Welcome to',
          500,
          'Welcome to\nMy Portfolio Website',
        ]}
        wrapper="h1"
        speed={50}
        className="text-center font-bold text-3xl md:text-5xl whitespace-pre-line bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
        cursor={true}
        repeat={0}
      />
    </div>
  );
};

export default SplashScreen;