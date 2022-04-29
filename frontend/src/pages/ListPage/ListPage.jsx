import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import withLayout from '../../global/hoc/Layout';

const ListPage = () => {
  const { list } = useParams();
  console.log(list);

  return (
    <div className="listpage">
      ListPage
    </div>
  );
};

export default withLayout(ListPage);
