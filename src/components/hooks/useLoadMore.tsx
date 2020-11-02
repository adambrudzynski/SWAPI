import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {fetchData} from '../redux/api/apiActions';
import {ReducerFactoryName} from '../redux/api/apiTypes';

interface Props {
  ref: any;
  nextURL: string | null;
  endpointType: ReducerFactoryName;
  loading: boolean;
}

export default function useLoadMore(
  ref: any,
  nextURL: string | null,
  endpointType: ReducerFactoryName,
  loading: boolean
) {
  const dispatch = useDispatch();
  return useCallback(
    (element) => {
      if (loading) return;
      if (ref.current) ref.current.disconnect();
      ref.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextURL) {
          dispatch(fetchData(nextURL, endpointType));
        }
      });
      if (element && ref.current) ref.current.observe(element);
    },
    [loading, nextURL, endpointType, ref, dispatch]
  );
}
