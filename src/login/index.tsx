import React, { FC, memo, ReactElement, useRef } from 'react'
import './index.less'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'

const Login: FC = (): ReactElement => {
  const loginRef = useRef(null)

  const loginHandle = (): void => {
    console.log(loginRef.current)
  }

  return (
    <div className="login">
      <div className="login-context">
        <form className="login-form" ref={loginRef}>
          <div className="system-name">ZXXXX</div>
          <TextField name="username" placeholder="请输入用户名" />
          <TextField name="password" placeholder="请输入密码" />
          <Button variant="contained" color="primary" disableElevation onClick={loginHandle}>
            登录
          </Button>
          <div className="agreement-context">
            <Checkbox name="agreement" color="primary" />
            <span>
              请同意<span className="agreement">用户协议</span>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default memo(Login)
