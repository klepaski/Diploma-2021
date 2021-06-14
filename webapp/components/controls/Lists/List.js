import React from 'react'
import styled, {css} from 'styled-components'
import marker from '../../../static/img/list-marker.svg'

const Ul = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  padding: 0;
  list-style-position: outside;
  list-style-image: url(${marker});
`;

const Li = styled.li`
  margin-bottom: 15px;
  margin-left: 15px;
  padding-left: 5px;
`;

export {Ul, Li}