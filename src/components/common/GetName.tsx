import React from 'react';
import {Link} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import { ApiNode } from './types';

interface Props {
  link: string | string[] | [];
  type: ApiNode;
}

export default function GetName({link, type}: Props) {
  const [loading, error, data] = useFetch(link);

  if (error) return <>'error'</>;
  if (loading) return <>'Loading...' </>;
  if (typeof link === 'object' && data) {
    return (
      <ul>
        {data.map((element: any) => {
          return (
            <li key={element.name ? element.name : element.title}>
              <Link
                to={`/${type}/${element.name ? element.name : element.title}`}
              >
                {element.name ? element.name : element.title},{' '}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
  if (data && typeof link === 'string') {
    return (
      <Link to={`/${type}/${data.name ? data.name : data.title}`}>
        {data.name ? data.name : data.title}
      </Link>
    );
  }
  return <>n/a</>;
}
