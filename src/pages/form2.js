import React, {useState} from 'react'
import axios, { post } from 'axios';
import {
  Row,
  Col,
  Card,
  Button,
  Avatar,
  Upload,
  Checkbox,
  Form,
  Select,
  Cascader,
  DatePicker,
  Input,
} from "antd";
import {
  UploadOutlined,
} from "@ant-design/icons";

function SimpleReactFileUpload(){
  const [file, setFile] = useState();
  function onFormSubmit(e){
    console.log('submit');
    console.log(e);
    // e.preventDefault() // Stop form submit
    fileUpload(file).then((response)=>{
      console.log(response.data);
    })
  }
  function onChange(e) {
    console.log('onChange');
    const file = e.target.files[0];
    console.log(file);
    setFile(file);
  }
  function onChangeUploader(e) {
    console.log('onChangeUploader');
    const file = e.file.originFileObj;
    console.log(file);
    setFile(file)
  }
  function fileUpload(file){
    const url = '/api/upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  axios.post(url, formData,config)
  }
  return (
    <Card
      title="#helpMalawi"
    >
      <Form onFinish={onFormSubmit}>
        <Form.Item>
          <Input type="file" onChange={onChange} />
        </Form.Item>
        <Form.Item>
          <Upload listType='picture' onChange={onChangeUploader}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        {/* <input type="file" onChange={this.onChange} /> */}
        <Button htmlType="submit">Upload</Button>
      </Form>
    </Card>
  )
}



export default SimpleReactFileUpload