import React from "react";

type TabItem = { key: string; label: React.ReactNode };

type TabsProps = {
  items: TabItem[];
  activeKey: string;
  onChange?: (key: string) => void;
};

const Tabs = ({ items, activeKey, onChange }: TabsProps) => (
  <div className="tabs">
    {items.map((item) => (
      <a
        key={item.key}
        className={`tab${item.key === activeKey ? " tab-active" : ""}`}
        onClick={() => onChange && onChange(item.key)}
      >
        {item.label}
      </a>
    ))}
  </div>
);

export default Tabs;
