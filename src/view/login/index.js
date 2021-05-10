import React, {Component} from 'react';
import './index.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
export  class Login extends Component{
    // 状态数据
    state = {
        layout: {
            labelCol: {
                span: 8,
              },
              wrapperCol: {
                span: 16,
              },
        },
        tailLayout: {
            wrapperCol: {
                offset: 8,
                span: 16,
              },
        }
    }
    onFinish = (values) => {
        console.log('Success:', values);
        // 获取this.props.history.location.query
        this.props.history.push({
            pathname: '/home',
            // query: {
            //     name: values.username,
            //     password: values.password,
            //     a: 1
            // }
        })
        sessionStorage.setItem("isLogin",true)
        // this.props.history.push('/login/params')
        // params Route需配置path="/login/:params"  获取this.props.match.params
      };
      onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    // 挂载
    componentDidMount(){

    }
    // 渲染
    render(){
        return (
            <Form
            {...this.state.layout}
            //   {...layout}
              name="basic"
              className="loginForm"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
        
              <Form.Item 
            //   {...tailLayout} 
            {...this.state.tailLayout}
              name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
        
              <Form.Item
            //    {...tailLayout}
            {...this.state.tailLayout}
               >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          );
    }
} 