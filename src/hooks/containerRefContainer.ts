import { createContainer } from 'unstated-next';

const useContainerRef = (props?: React.RefObject<HTMLDivElement | null>) => {
  return props;
};

export default createContainer(useContainerRef);
