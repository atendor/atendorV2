import React from "react";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => (
  <div className="join join-vertical w-full">
    {items.map((item, idx) => (
      <div key={idx} className="collapse collapse-arrow join-item border">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium">{item.title}</div>
        <div className="collapse-content">{item.content}</div>
      </div>
    ))}
  </div>
);

export default Accordion;
