import React from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { ThemeProvider } from './themeContext';

function Layout({children}) {
    return (
      <ThemeProvider>
          {/* Remove transition-all to disable the background color transition. */}
        <div className="bg-white dark:bg-black transition-all">
            <Sidebar />
            <Header />
            <Content>
              {children}
            </Content>
        </div>
      </ThemeProvider>
       
    );
}

export default Layout;