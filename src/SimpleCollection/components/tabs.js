import React, { useState } from "react";
import { Profile } from "@uniwebcms/module-sdk";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Tab({ name, value, onTabClick }) {
  return (
    <button
      onClick={onTabClick}
      className={classNames(
        value
          ? "bg-indigo-100 text-indigo-700"
          : "text-gray-500 hover:text-gray-700",
        "rounded-md px-3 py-2 text-sm font-medium"
      )}
      aria-current={value ? "page" : undefined}
    >
      {name}
    </button>
  );
}

export default function Example({ block: { Blocks, childBlocks } }) {
  const [tabsState, setTabsState] = useState(0);

  function handleClick(i) {
    setTabsState(i);
  }

  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={childBlocks[0].title}
          >
            {childBlocks.map((tab) => (
              <option key={tab.title}>{tab.title}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {childBlocks.map((tab, index) => (
              <Tab
                name={Profile.stripTags(tab.title)}
                value={tabsState === index}
                onTabClick={() => handleClick(index)}
              />
            ))}
          </nav>
        </div>
      </div>
      <Blocks blocks={[childBlocks[tabsState]]} />
    </>
  );
}
