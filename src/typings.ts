import type { Feature, FeatureCollection } from 'geojson';
import type { ViewerProps } from 'resium';

type CustomFormItemProps<T> = {
  id?: string | undefined;
  'aria-invalid'?: boolean | undefined;
  'aria-describedby'?: string | undefined;
  'aria-required'?: boolean | undefined;
  value?: T | undefined;
  onChange?: ((value?: T | undefined) => void) | undefined;
  disabled?: boolean | undefined;
};

export type Value = Feature | FeatureCollection;

export type Props = CustomFormItemProps<Value> & {
  className?: string;
  maxCount?: number;
  viewerProps?: ViewerProps;
  tokens: string[];
};
