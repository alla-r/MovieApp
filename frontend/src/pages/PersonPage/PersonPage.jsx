import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import withLayout from '../../global/hoc/Layout';

const PersonPage = () => {
  // const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    console.log('person page');
    console.log(params.id);
  }, [params]);

  return (
    <div className="personPage">
      Person page
    </div>
  );
};

export default withLayout(PersonPage);
