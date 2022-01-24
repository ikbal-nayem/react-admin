import React from 'react'
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { header } from 'styles/animation/motion';


function PageWrapper({children, page_title}) {
  return (
    <div className="app-wrapper">
      {page_title &&
        <motion.h5
          className="text-center font-weight-bold mb-3"
          variants={header.head}
          initial="from"
          animate="to"
          exit="exit"
        >
          {page_title}
        </motion.h5>
      }
      <div className="animate__animated animate__fadeIn">
        {children}
      </div>
    </div>
  )
}

PageWrapper.propTypes = {
  page_title: PropTypes.string,
  children: PropTypes.node
}

export default PageWrapper;
