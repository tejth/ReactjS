//Inner working of react at the end react converts everthing similar to below code

const customRender = (reactElement, container) => {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   container.appendChild(domElement);

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
};

const reactElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "__blank__",
  },
  children: "this link opens google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);

//The only difference is react uses render method to render elements which is different from the customRender method that
///is created by us above also the render method used by react accepts other types of arguments
