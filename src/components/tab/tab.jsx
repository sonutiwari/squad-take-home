import React, { useState, useEffect } from "react";
import {
  tab as tabStyle,
  tabs as tabsStyle,
  tabBorder,
  selectedTab,
  tabContent,
} from "./tab.style";
import "./tab.scss";

/**
 * The component which will render multiple tabs inside it.
 * @param {React.props} incomingProps : Group of tabs as children.
 * @returns A component which will render all the tabs passed to it.
 */
const Tabs = (props) => {
  // Set local state and hooks.
  const [selectedIndex, setIndex] = useState(0);
  const [children, setChildren] = useState(props.children);

  /**
   * Update tabs with latest data.
   * @param {React.props.Children} children
   */
  const updateInsideTabsProp = (children) => {
    const childrenClone = children.map((child) =>
      React.cloneElement(child, { insideTabs: true })
    );
    setChildren(childrenClone);
  };

  /**
   * Find selected tab to highlight it.
   * @param {React.props.Children} children
   */
  const findSelectedTabIndex = (children) => {
    const isTabSelected = (reactElement) => reactElement.props.selected;
    const childrenArray = React.Children.toArray(children);
    return childrenArray.findIndex(isTabSelected);
  };

  useEffect(() => {
    updateInsideTabsProp(props.children);
    const index = findSelectedTabIndex(props.children);
    if (index > -1) {
      setIndex(index);
    }
  }, [props.children]);

  const getTabContent = (children) => {
    return children.map(updateSelectedProp);
  };

  /**
   * Update property of seected child.
   * @param {React.props.Children.child} child : input child.
   * @param {number} index: index of current child.
   * @returns {React.props.Children.child} : clone of input child with updated properties.
   */
  const updateSelectedProp = (child, index) => {
    let childClone = child;
    if (selectedIndex === index) {
      childClone = React.cloneElement(child, { selected: true, key: index });
      return childClone;
    }
    childClone = React.cloneElement(child, { selected: false, key: index });
    return childClone;
  };

  /**
   * The method will return style for the tab passed as index.
   * @param {React.props.Children} children : All tabs as children of tabs component.
   * @param {number} currentIndex : index of child being considered.
   * @returns {object} : Style object for current child.
   */
  const getTabStyle = (children, currentIndex) => {
    let style = { ...tabStyle };

    if (currentIndex !== children.length - 1) {
      style = { ...style, ...tabBorder };
    }

    if (currentIndex === selectedIndex) {
      style = { ...style, ...selectedTab };
    }

    return style;
  };

  return (
    <>
      <div style={{ ...tabsStyle }}>
        {children.map((tab, index) => (
          <span
            className="tab"
            style={getTabStyle(children, index)}
            key={index}
            onClick={() => setIndex(index)}
          >
            {tab.props.name}
          </span>
        ))}
      </div>

      {getTabContent(children).map((child) => child)}
    </>
  );
};

// Default propertu of a tab.
const tabDefaultProps = {
  name: "",
  selected: true,
  insideTabs: false,
};

/**
 * A single Tab component.
 * @param {React.Component.props} incomingProps
 * @returns {React.Component} : Tab component.
 */
const Tab = (incomingProps) => {
  const props = { ...tabDefaultProps, ...incomingProps };

  return (
    <>
      {!props.insideTabs && <span>{props.name}</span>}
      <div style={tabContent}>{props.selected && props.children}</div>
    </>
  );
};

export { Tabs, Tab };
