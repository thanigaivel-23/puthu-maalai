import { Helmet } from "react-helmet-async";
import React from 'react'

const MetaData = ({titte}) => {

  return (
    <Helmet>
        <title>{titte}</title>
    </Helmet>
  )

}

export default MetaData