import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link className={styles.link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New Order </Link>
    <Link className={styles.link} to={`${process.env.PUBLIC_URL}/waiter/order/:id`}> Edit Order</Link>
  </div>
);

Waiter.propTypes = {
};

export default Waiter;