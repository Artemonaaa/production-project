import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string; 
}

const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>TOGGLE</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.language} />
      </div>
    </div>
  )
}

export default Sidebar