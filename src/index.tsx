import { useRef } from 'react';
import Children from './components/children';
import ContainerRefContainer from './hooks/containerRefContainer';
import PropsContainer from './hooks/propsContainer';
import type { Props } from './typings';

const GesiumGeoJsonEditor: React.FC<Props> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <PropsContainer.Provider initialState={props}>
      <ContainerRefContainer.Provider initialState={containerRef}>
        <Children />
      </ContainerRefContainer.Provider>
    </PropsContainer.Provider>
  );
};

export default GesiumGeoJsonEditor;
