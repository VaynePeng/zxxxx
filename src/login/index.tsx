import React, { FC, memo, ReactElement, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import Cookies from 'js-cookie'
import './index.less'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'

interface ILoginForm {
  username: string
  password: string
}

const initForm: ILoginForm = {
  username: '',
  password: ''
}

const Login: FC = (): ReactElement => {
  const history = useHistory()
  const [loginForm, setLoginForm] = useState<ILoginForm>(initForm)
  const [isAgree, setIsAgree] = useState<boolean>(false)

  const loginHandle = (): void => {
    if (!loginForm.username) {
      return
    } else if (!loginForm.password) {
      return
    } else if (!isAgree) {
      return
    }
    history.push('/')
  }

  return (
    <div className="login">
      <div className="login-context">
        <form className="login-form">
          <div className="system-name">ZXXXX</div>
          <TextField
            value={loginForm.username}
            onChange={(event) =>
              setLoginForm({
                ...loginForm,
                username: event.target.value
              })
            }
            placeholder="请输入用户名"
          />
          <TextField
            value={loginForm.password}
            onChange={(event) =>
              setLoginForm({
                ...loginForm,
                password: event.target.value
              })
            }
            type="password"
            placeholder="请输入密码"
          />
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={loginHandle}
          >
            登录
          </Button>
          <div className="agreement-context">
            <Checkbox
              value={isAgree}
              onChange={(event) => setIsAgree(event.target.checked)}
              color="primary"
            />
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
