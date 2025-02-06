import React from 'react'
import { Image } from 'antd';
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
    
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };

const ContactUsSection = () => {
  return (
    <div className='container my-5 p-2'>
        <div className='text-center'>
            <h1 className='text-info mb-5'>ContactUs</h1>
        </div>
      <div className='row '>
          <div className='col-lg-6 col-md-6 col-sm-12'>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
            maxWidth: 600,
            }}
            validateMessages={validateMessages}
        >
            <Form.Item
            name={['user', 'name']}
            label={<span style={{ color: 'white' }}>Name</span>}
            rules={[
                {
                required: true,
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            name={['user', 'email']}
            label={<span style={{ color: 'white' }}>Email</span>}
            
            rules={[
                {
                type: 'email',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            name={['user', 'age']}
            label={<span style={{ color: 'white' }}>Age</span>}
            rules={[
                {
                type: 'number',
                min: 0,
                max: 99,
                },
            ]}
            >
            <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'website']}  label={<span style={{ color: 'white' }}>Website</span>} >
            <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']}  label={<span style={{ color: 'white' }}>introduction</span>}>
            <Input.TextArea />
            </Form.Item>
            <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
          <Image.PreviewGroup
                preview={{
                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                <Image  src="./src/assets/hero_maps_static_api.png" />
               
            </Image.PreviewGroup>
          </div>
      </div>
    </div>
  )
}

export default ContactUsSection
