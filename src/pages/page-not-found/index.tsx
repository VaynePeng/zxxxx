import React, { memo, FC, ReactElement } from 'react'

const PageNotFound: FC = (): ReactElement => {
  return (
    <div className="page-not-found">
      page not found
    </div>
  )
}

export default memo(PageNotFound)