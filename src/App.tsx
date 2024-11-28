import { useEffect } from 'react';
import './App.css'
import { useTheme } from './components/common/useTheme';
import { Page } from './page/Page';
import { Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      <Page />
      <div className="absolute cursor-pointer top-8 z-50 right-6 md:top-7 md:right-[56px] border-2 hover:text-orange-200 border-black hover:border-[#2c1f31] hover:bg-[#2c1f31] dark:border-white dark:hover:border-secondary dark:hover:bg-secondary dark:hover:text-gray-900 rounded-full p-1 sm:p-1.5">
        {theme === 'dark' ? (
          <Sun onClick={toggleTheme} className="text-white dark:hover:text-gray-900 w-5 h-5 sm:w-7 sm:h-7"/>
        ) : (
          <Moon onClick={toggleTheme} className="w-5 h-5 sm:w-7 sm:h-7 "/>
        )}
      </div>
    </>
  )
}

export default App
