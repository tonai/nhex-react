import { FC, ReactInstance, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type BaseContainer = Element | ReactInstance;
type FnContainer = () => BaseContainer;
type Container = BaseContainer | FnContainer;

interface Props {
  container?: Container
}

function getContainer(container?: Container): Element {
  container = typeof container === 'function' ? container() : container;
  if (container instanceof Element) {
    return container;
  }

  const node = ReactDOM.findDOMNode(container);
  return node instanceof Element ? node : document.body;
}

const Portal: FC<Props> = (props) => {
  const { children, container } = props;
  const [ mountNode, setMountNode ] = useState<Element | null>(null);

  useEffect(() => {
    setMountNode(getContainer(container));
  }, [container]);

  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
};

export default Portal;
