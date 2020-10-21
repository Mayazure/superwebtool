import React, {useState} from "react";
import {Form, Button, Row, Col, Space} from 'antd'
import TextArea from "antd/es/input/TextArea";
import JSONTreeView from "./components/JSONTreeBuilder";
import "../../assets/swt.css"
import { useIntl } from 'umi';

const mock = '{"squadName":"Super hero squad","homeTown":"Metro City","formed":2016,"secretBase":"Super tower","active":true,"members":[{"name":"Molecule Man","age":29,"secretIdentity":"Dan Jukes","powers":["Radiation resistance","Turning tiny","Radiation blast"]},{"name":"Madame Uppercut","age":39,"secretIdentity":"Jane Wilson","powers":["Million tonne punch","Damage resistance","Superhuman reflexes"]},{"name":"Eternal Flame","age":1000000,"secretIdentity":"Unknown","powers":["Immortality","Heat Immunity","Inferno","Teleportation","Interdimensional travel"]}]}';

export default function (props){

  const [jsonStr, setJsonStr] = useState(null)
  const [form] = Form.useForm();

  const onVisualize = ()=>{
    const value = form.getFieldValue('jsonInput')
    setJsonStr(value)
  }

  const onExample = ()=>{
    form.setFieldsValue({
      jsonInput: mock,
    });
    onVisualize();
  }

  const onClear = ()=>{
    form.resetFields();
    onVisualize();
  }

  const onFormat = ()=>{
    const value = form.getFieldValue('jsonInput')
    form.setFieldsValue({
      jsonInput: JSON.stringify(JSON.parse(value), undefined, 4)
    })
  }

  const onCompress = ()=>{
    const value = form.getFieldValue('jsonInput')
    form.setFieldsValue({
      jsonInput: JSON.stringify(JSON.parse(value))
    })
  }

  const intl = useIntl();

  return(
    <>
      <Row>
        <div style={{margin:'8px'}}>
          <Space>
            <Button onClick={()=>onFormat()}>{intl.formatMessage({id:'JSON_VISUALIZATION_BUTTON_LABEL_FORMAT'})}</Button>
            <Button onClick={()=>onCompress()}>{intl.formatMessage({id:'JSON_VISUALIZATION_BUTTON_LABEL_COMPRESS'})}</Button>
            <Button onClick={()=>onClear()}>{intl.formatMessage({id:'JSON_VISUALIZATION_BUTTON_LABEL_CLEAR'})}</Button>
            <Button onClick={()=>onExample()}>{intl.formatMessage({id:'JSON_VISUALIZATION_BUTTON_LABEL_EXAMPLE'})}</Button>
            <Button type="primary" onClick={()=>onVisualize()}>{intl.formatMessage({id:'JSON_VISUALIZATION_BUTTON_LABEL_VISUALIZE'})}</Button>
          </Space>
        </div>
      </Row>
      <Row>
        <Col span={10}>
          <Form
            form={form}
          >
            <Form.Item
              name="jsonInput"
            >
              <TextArea bordered={false} style={{minHeight:'100vh', width:'100%', resize:'none'}} placeholder={intl.formatMessage({id:'JSON_VISUALIZATION_INPUT_PLACEHOLDER'})}/>
            </Form.Item>
          </Form>
        </Col>
        <Col span={14}>
          {/*<div style={{maxHeight:'100vh', overflow:'auto'}}>*/}
            <JSONTreeView jsonStr={jsonStr}/>
          {/*</div>*/}
        </Col>
      </Row>
    </>
  )
}
