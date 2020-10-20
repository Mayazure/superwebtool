import React, {useState} from "react";
import {Form, Button, Row, Col, Space, Divider} from 'antd'
import TextArea from "antd/es/input/TextArea";
import JSONTreeView from "../components/JSONTreeBuilder";
import {GithubFilled} from "@ant-design/icons"
import mock from "../mock/mock";
import "../assets/css/swt.css"

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

    return(
        <>
            <div className="shadow">
                <Row>
                    <Col span={12}>
                        <div className="text-left" style={{margin:'4px'}}>
                            <Space>
                                <Button onClick={()=>onFormat()}>format</Button>
                                <Button onClick={()=>onCompress()}>compress</Button>
                                <Button onClick={()=>onClear()}>clear</Button>
                                <Button onClick={()=>onExample()}>example</Button>
                                <Button type="primary" onClick={()=>onVisualize()}>visualize</Button>
                            </Space>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="text-right" style={{margin:'4px'}}>
                            <Space>
                                <Button href="https://github.com/Mayazure/superwebtool" icon={<GithubFilled />}>Github</Button>
                            </Space>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col span={10}>
                    <Form
                        form={form}
                    >
                        <Form.Item
                            name="jsonInput"
                        >
                            <TextArea style={{height:'100vh', resize:'none'}} placeholder={"Input your json data here"}/>
                        </Form.Item>
                    </Form>

                </Col>
                <Col span={14}>
                    <JSONTreeView jsonStr={jsonStr}/>
                </Col>
            </Row>
        </>
    )
}
